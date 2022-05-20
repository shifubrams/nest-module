import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { LoggerService } from './Logger/logger.service';
@Injectable()
export class AppService {
  constructor(
    @Inject(forwardRef(() => LoggerService)) private logger: LoggerService
  ) {}
  getHello(): string {
    this.logger.info('Hello World!');
    return 'Hello World!';
  }
}
