import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from './../src/app.module';
import { getConnection } from 'typeorm';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    // e2e 테스트가 끝나면 db를 drop해야 함
    await getConnection().dropDatabase();
    app.close();
  });

  it.todo('createBoard');
  it.todo('boards');
  it.todo('boardTotalCount');
  it.todo('boardByPage');
  it.todo('boardByNumber');
  it.todo('updateBoard');
  it.todo('deleteBoard');
});
