import { NestFactory } from '@nestjs/core';
import { SpelunkerModule } from 'nestjs-spelunker';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // INFO : Will print the tree of dependencies
  // console.log(JSON.stringify(SpelunkerModule.explore(app), null, 2));
  await app.listen(3000);
}
bootstrap();
