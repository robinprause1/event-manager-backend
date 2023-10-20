import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import * as cors from 'cors';

async function bootstrap() {
  const logger = new Logger('bootstrap');
  const app = await NestFactory.createApplicationContext(AppModule);
  
  // Enable CORS
  app.enableCors({
    origin: '*',  // replace with your front-end application origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });
  
  // Set global prefix
  app.setGlobalPrefix('api');

  logger.log(`Application startet`);
}
bootstrap();
