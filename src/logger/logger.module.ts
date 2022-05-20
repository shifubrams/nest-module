import { Module, DynamicModule } from '@nestjs/common';
import { LoggerConfig } from './config.model';
import { LoggerService } from './logger.service';
import { LOGGER } from './constants';

@Module({})
export class LoggerModule {
  static forRootAsync(loggerConfig?: LoggerConfig): DynamicModule {
    const provider = {
      provide: LOGGER,
      useFactory: async () => {
        try {
          return {
            log: console.log,
            info: console.log,
            error: console.log,
            warn: console.log,
            perfs: console.log,
            usage: console.log,
          };
        } catch (error) {
          console.error(error);
          throw error;
        }
      },
    };
    return {
      module: LoggerModule,
      providers: [provider, LoggerService],
      exports: [provider, LoggerService],
    };
  }
}
