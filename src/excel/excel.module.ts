import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';

import { PreauthMiddleware } from 'src/auth/preauth.middleware';
import { ExcelController } from './excel.controller';

@Module({
  controllers: [ExcelController]
})
export class ExcelModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
    .apply(PreauthMiddleware)
    .forRoutes({
      path: '*', method: RequestMethod.ALL
    });
  }
}
