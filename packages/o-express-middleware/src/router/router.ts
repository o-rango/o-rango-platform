import { NextFunction, Request, Response} from 'express';
import {getConfig} from '../config/config';
import logger from '../utils/logger';
import {UAChecker} from '../utils/';



export async function routerHandler(req: Request, res: Response, next: NextFunction) {
  const routes = getConfig('routes');
  logger.log('info' , `Router Handler initialized with req :  ${req.url}`);

  const isMobile = await UAChecker(req.headers['user-agent']);
  res.write('<html>');
  res.write('<body>');
  res.write(`Is mobile ?!!!  ${isMobile}`);
  res.write('</body>');
  res.write('</html>');
  res.end();
  next();
}

