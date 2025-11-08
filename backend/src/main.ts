import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  app.setGlobalPrefix('api');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  const config = new DocumentBuilder()
    .setTitle('Onboarding API')
    .setDescription('The onboarding API description')
    .setVersion('1.0')
    .addTag('onboarding')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(process.env.PORT ?? 3000);

  Logger.log(`Server running on http://localhost:${process.env.PORT ?? 3000}`);
  Logger.log(
    `Swagger running on http://localhost:${process.env.PORT ?? 3000}/api/docs`,
  );
}
bootstrap();
