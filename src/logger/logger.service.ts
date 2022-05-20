import { Injectable, Inject } from '@nestjs/common';
import { LOGGER } from './constants';
import { OptionalParams } from './OptionalParams.model';

@Injectable()
export class LoggerService {
  constructor(@Inject(LOGGER) private logger) {}
  /**
   * Will log with Level1 as "Information" with indexName *-info-*
   * @param message Even a json or a string
   * @param optionalParams
   */
  async log(message: any, optionalParams?: OptionalParams) {
    try {
      await this.logger.log(this.jsonBeautify(message), optionalParams);
    } catch (error) {
      this.loggerErrorHandler(message, optionalParams);
    }
  }
  /**
   * Will log with Level1 as "Information" with indexName *-info-*
   * @param message Even a json or a string
   * @param optionalParams
   */
  async info(message: any, optionalParams?: OptionalParams) {
    try {
      await this.logger.info(this.jsonBeautify(message), optionalParams);
    } catch (error) {
      this.loggerErrorHandler(message, optionalParams);
    }
  }

  /**
   * Will log with Level1 as "Information" with indexName *-usage-*
   * @param message Even a json or a string
   * @param optionalParams
   */
  async usage(message: any, optionalParams?: OptionalParams) {
    try {
      await this.logger.usage(this.jsonBeautify(message), optionalParams);
    } catch (error) {
      this.loggerErrorHandler(message, optionalParams);
    }
  }

  /**
   * Will log with Level1 as "Information" with indexName *-perfs-* and a specific field "ElapsedMilliseconds"
   * @param message Even a json or a string
   * @param optionalParams
   * @param hrtime This param takes the result of calling process.hrtime(myHr). The logger will parse it into milliseconds by itself.
   */
  async perfs(
    message: any,
    hrtime: [number, number],
    optionalParams?: OptionalParams
  ) {
    try {
      await this.logger.perfs(
        this.jsonBeautify(message),
        hrtime,
        optionalParams
      );
    } catch (error) {
      this.loggerErrorHandler(message, optionalParams);
    }
  }
  /**
   * Will log with Level1 as "Error" with indexName *-error-*
   * @param message Even a json or a string
   * @param optionalParams you can add the stack in those ones. It will help to debug if needed
   */
  async error(message: any, optionalParams?: OptionalParams & { stack?: any }) {
    try {
      await this.logger.error(this.jsonBeautify(message), optionalParams);
    } catch (error) {
      this.loggerErrorHandler(message, optionalParams);
    }
  }

  /**
   * Will log with Level1 as "Error" with indexName *-error-*
   * @param message Even a json or a string
   * @param optionalParams you can add the stack in those ones. It will help to debug if needed
   */
  async warn(message: any, optionalParams?: OptionalParams) {
    try {
      await this.logger.error(this.jsonBeautify(message), optionalParams);
    } catch (error) {
      this.loggerErrorHandler(message, optionalParams);
    }
  }

  private jsonBeautify(jsonObject: object) {
    if (typeof jsonObject === 'object') {
      return JSON.stringify(jsonObject, null, 2);
    }
    return jsonObject;
  }

  private loggerErrorHandler(message, optionalParams?, hrtime?) {
    console.error(
      `Logger is not available, here is the message that was supposed to be logged : \n ${this.jsonBeautify(
        message
      )}\n${
        optionalParams
          ? ' Optional params : ' + JSON.stringify(optionalParams, null, 2)
          : ''
      }\n
      ${hrtime ? ' HR TIME : ' + JSON.stringify(hrtime, null, 2) : ''}`
    );
  }
}
