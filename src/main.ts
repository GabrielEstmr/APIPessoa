import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';




import { AllExceptionsFilter } from './common/filters/http-exception-filter';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(new AllExceptionsFilter());

  const config = new DocumentBuilder()
    .setTitle('API Pessoas')
    .setDescription('API Medprev')
    .setVersion('1.0')
    .addTag('Pessoas')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);

}
bootstrap();
