import logger from './logger';

test('Logger - Basic Test', () => {
 logger.log('info', 'logger-test');
 logger.log('error', 'logger-test');
 logger.log('warn' , 'logger-test');
});
