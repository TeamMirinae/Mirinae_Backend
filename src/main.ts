import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.SERVER_PORT || 3000;

  app.setGlobalPrefix(process.env.SERVER_VERSION);

  await app.listen(port, () => {
    console.log(`======= ENV: ${process.env.NODE_ENV} =======`);
    console.log(`🚀 App listening on the port ${port}`);
  });
}
bootstrap();
