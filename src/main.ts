import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() { // Main 
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // remueve detos que no necesita apesar se ser enviados , activa validacion del dto
      forbidNonWhitelisted: true, // envia el error al front de todas las validaciones
    }),
  )
  await app.listen(3000);
}
bootstrap();
