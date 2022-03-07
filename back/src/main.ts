import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3000;

  await app.listen(port);
  Logger.log(`어플리케이션 시작 (포트: ${port}) `);
}
bootstrap();