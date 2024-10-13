import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'dotenv';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';


config();

const port = process.env.PORT ? parseInt(process.env.PORT) : 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: false,
  });

  const config = new DocumentBuilder()
  .setTitle("Lili's fav games")
  .setDescription("Lili's fav games list API")
  .setVersion('0.0.1')
  .addBearerAuth(
    {
    type: 'http',
    scheme: 'bearer',
    bearerFormat: 'JWT',
    name: 'Authorization',
    description: 'Insert token',
    in: 'header' 
    },
    'KEY_AUTH_TOKEN'
  )
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger-doc', app, document);

  await app.listen(port);
}

bootstrap();
