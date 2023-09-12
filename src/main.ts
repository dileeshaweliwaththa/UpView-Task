import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import getConfig from './core/config/configurations';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(
    `${getConfig().APP.globalPrefix}/${getConfig().APP.version}`,
  );

  const config = new DocumentBuilder()
  .setTitle(getConfig().APP.name)
  .setDescription(getConfig().APP.description)
  .setVersion(getConfig().APP.version)
  .build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup(
  `${getConfig().APP.globalPrefix}/${getConfig().APP.version}`, 
  app, 
  document);

  await app.listen(3000);
}
bootstrap();
