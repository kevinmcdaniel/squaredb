import type { Request } from 'express';
import winston, { createLogger } from 'winston';

export const initLogger = (req: Request) => {
    let baseLogger = createLogger({
        levels: winston.config.npm.levels,
        format: winston.format.combine(
            winston.format.timestamp({
                format: 'YYYY-MM-DD HH:mm:ss'
            }),
            winston.format.json(),
            winston.format.prettyPrint({
                colorize: true
            }),
            winston.format.colorize({
                all: true,
                colors: {
                    info: 'blue',
                    error: 'red',
                    warn: 'yellow',
                    debug: 'green',
                    verbose: 'cyan',
                    silly: 'magenta'
                },
            }),
            winston.format.simple(),
            winston.format.errors({ stack: true }),
        ),
        transports: [
            new winston.transports.Console()
        ],
        exceptionHandlers: [
            new winston.transports.Console()
        ],
        rejectionHandlers: [
            new winston.transports.Console()    
        ],
    });
    return baseLogger.child({ correlationId: req.headers['x-correlation-id'] });
}
