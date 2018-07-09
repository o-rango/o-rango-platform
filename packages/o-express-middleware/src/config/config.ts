import logger from '../utils/logger';
import {IConfig , IRoute} from './config-interfaces';

let routesConfiguration: IRoute[] = [];
let globalConfiguration: IConfig;

export async function globalConfig(options: IConfig) {
  if (options) {
    logger.log( 'info' , `Initialize Config: ${JSON.stringify(options)}`);
    globalConfiguration = {...options};
    Promise.resolve(globalConfiguration);
  } else {
    logger.log('error', 'Invalid or null - Global Configuration Provided');
    Promise.reject('error');
  }
}

export async function routerConfig(options: IRoute[]) {
  if (options) {
    logger.log('info', `Router Config: ${JSON.stringify(options)}`);
    routesConfiguration = [...options];
    Promise.resolve(routesConfiguration);
  } else {
    logger.log('error', 'Invalid or null - Route Configuration Provided');
    Promise.reject('error');
  }
}

export async function getConfig(type: 'global'|'routes') {
    if (type) {
      return type === 'global' ? Promise.resolve(globalConfiguration) : Promise.resolve(routesConfiguration);
    } else {
      logger.log('error', 'Invalid or null - Configuration Type');
      Promise.reject('error');
    }
}
