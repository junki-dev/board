import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DateScalar } from './../../src/common/scalars/date.scalar';
import { BoardEntity } from './board.entity';
import { BoardResolver } from './board.resolver';
import { BoardService } from './board.service';

@Module({
  imports: [TypeOrmModule.forFeature([BoardEntity])],
  providers: [BoardResolver, BoardService, DateScalar],
})
export class BoardModule {}
