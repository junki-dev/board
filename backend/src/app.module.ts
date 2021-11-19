import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as Joi from 'joi';
import { join } from 'path';
import { BoardModule } from './board/board.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: process.env.NODE_ENV === `dev` ? '.env.dev' : '.env.test',
      validationSchema: Joi.object({
        PORT: Joi.number().default(3000),
      }),
    }),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: `mongodb://${process.env.DB_USER}:${process.env.DB_PWD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}?authSource=admin&authMechanism=SCRAM-SHA-1`,
      logging: true,
      autoLoadEntities: true,
      entities: [join(__dirname, '**/**.entity{.ts,.js}')],
      synchronize: true,
    }),
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      installSubscriptionHandlers: true,
      cors: {
        origin: '*',
        credentials: true,
      },
    }),
    BoardModule,
  ],
})
export class AppModule {}
