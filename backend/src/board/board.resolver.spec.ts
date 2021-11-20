import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DateScalar } from './../common/scalars/date.scalar';
import { BoardEntity } from './board.entity';
import { BoardResolver } from './board.resolver';
import { BoardService } from './board.service';

describe('BoardResolver', () => {
  let resolver: BoardResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [TypeOrmModule.forFeature([BoardEntity])],
      providers: [BoardResolver, BoardService, DateScalar],
    }).compile();

    resolver = module.get<BoardResolver>(BoardResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
