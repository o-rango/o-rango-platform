import Axios from 'Axios';
import { NextFunction, Request, Response} from 'express';
import {getConfig} from '../config/config';
import { IConfig } from '../config/config-interfaces';
import {routeMatch, UAChecker} from '../utils/';
import logger from '../utils/logger';
import { throws } from 'assert';

export async function routerHandler(req: Request, res: Response, next: NextFunction) {
  logger.log('debug' , `Router Handler initialized with req :  ${req.url}`);

  const profiler = logger.profile('processing view:');
  let htmlResult = '';
  const isMobile = await UAChecker(req.headers['user-agent']);
  const route = await routeMatch(await getConfig('routes'), req.url);
  const globalConfig: any = await getConfig('global');

  // Template Fetcher
  function fetchContent(url: string) {
    return Axios.get(url , globalConfig.axiosConfig);
  }

  if (!route && !globalConfig.errorUrl) {
    res.status(404).send('NOT FOUND');
    next();
  }

  const urlTemplate = globalConfig.templates[route.template];
  const template = (content) => {
    logger.info('Errara' ,  urlTemplate);
    return urlTemplate.content.replace(urlTemplate.zone , content);
  };

  try {
       const urlFetch = !route  && globalConfig.errorUrl !== '' ? globalConfig.errorUrl : route.handler(isMobile).ssr;
       const data =  await fetchContent(urlFetch);
       htmlResult = data.data;
  } catch (error) {
      logger.log('error' , `Error rendering going to Fallback View: ${req.url}`);
      /* tslint:disable */
      htmlResult = `${route.handler(isMobile).fallback.tag}<script async src="${route.handler(isMobile).fallback.script}"></script>`;
      /* tslint:enable */
  }



  res.send(template(htmlResult));
  next();
  logger.profile('processing view:');
}
