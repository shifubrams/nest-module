import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerModule } from './logger/logger.module';
import { LoggerService } from './Logger/logger.service';

@Module({
  imports: [LoggerModule.forRootAsync()],
  controllers: [AppController],
  providers: [AppService, LoggerService],
})
export class AppModule {}
