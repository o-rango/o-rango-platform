import logger from './logger';

export async function UAChecker(uaHeader: string) {
  const result = (/iphone|ipod|android|blackberry|opera|mini|windows\sce|palm|smartphone|iemobile/i).test(uaHeader);
  logger.info('info', `User Agent is Mobile : ${result}`);
  return await result;
}
