/**
 * Entry point | Nest 애플리케이션 인스턴스 생성
 */
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

declare const module: any; // [개발용] Hot reload 사용

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get('PORT');

  await app.listen(port);

  /**
   * [개발용] Hot reload 활성화
   */
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }

  Logger.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
