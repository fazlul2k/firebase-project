import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { NestExpressApplication } from '@nestjs/platform-express';
import { Logger } from '@nestjs/common';
import { join } from 'path';
// import {fileUpload} from 'express-fileupload'
// const upload = require('express-fileupload')


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('App');
  // app.useStaticAssets(join(__dirname, '..', 'public'));
  // console.log(process.cwd());
  // app.use(upload({
  //   limits: { fileSize: 50 * 1024 * 1024 },
  // }));
  await app.listen(3001);
}
bootstrap();
