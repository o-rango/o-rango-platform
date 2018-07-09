import * as winston from 'winston';

const logger = winston.createLogger({
  format: winston.format.json(),
  level: 'info',
  transports: [
    new winston.transports.File({ filename: './logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: './logs/combined.log' }),
  ],
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.combine(
      winston.format.colorize({ all: true }),
      winston.format.simple(),
    ),
  }));
}

export default logger;
