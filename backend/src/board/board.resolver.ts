import { Logger } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Board } from 'src/graphql.schema';
import { BoardEntity } from './board.entity';
import { BoardService } from './board.service';
import { BoardInputInterface } from './interfaces/board.interface';

@Resolver('Board')
export class BoardResolver {
  constructor(private readonly boardService: BoardService) {}
  private readonly logger = new Logger(BoardResolver.name);

  /**
   * 전체 게시글 조회
   * @returns {Board[]} 전체 게시글 목록
   */
  @Query('boards')
  async findAll(): Promise<BoardEntity[]> {
    this.logger.log(`findAll()`);
    return this.boardService.findAll();
  }

  /**
   * 페이지 별 데이터 목록 조회
   * @returns {Board[]} 전체 게시글 목록
   */
  @Query('boardByPage')
  async findBoardByPage(@Args('page') page: number): Promise<BoardEntity[]> {
    this.logger.log(`findBoardByPage() - ${page}`);
    return this.boardService.findBoardByPage(page);
  }

  /**
   * 페이지 별 데이터 목록 조회
   * @returns {Board[]} 전체 게시글 목록
   */
  @Query('boardByNumber')
  async findBoardByNumber(@Args('boardNumber') boardNumber: number): Promise<BoardEntity> {
    this.logger.log(`findBoardByNumber() - ${boardNumber}`);
    return this.boardService.findBoardByNumber(boardNumber);
  }

  /**
   * 게시글 전체 개수 조회
   * @returns {number} 게시글 전체 개수
   */
  @Query('boardTotalCount')
  async findBoardCount(): Promise<number> {
    this.logger.log(`findBoardCount()`);
    return this.boardService.findBoardCount();
  }

  /**
   * 게시글 등록
   * @param {BoardInputInterface} input 게시글 입력 데이터
   * @returns {BoardEntity} 저장된 게시글 데이터
   */
  @Mutation('createBoard')
  async createBoard(@Args('createBoardInput') input: BoardInputInterface): Promise<BoardEntity> {
    this.logger.log(`createBoard()`);
    return await this.boardService.create(input);
  }

  /**
   * 게시글 수정
   * @param {number} input 게시글 데이터
   * @returns {}
   */
  @Mutation('updateBoard')
  async updateBoard(@Args('createBoardInput') input: BoardInputInterface): Promise<BoardEntity> {
    this.logger.log(`updateBoard()`);
    return await this.boardService.update(input);
  }

  /**
   * 게시글 삭제
   * @param {number} boardNumber 게시글 번호
   * @param {number} password 비밀번호
   * @returns
   */
  @Mutation('deleteBoard')
  async deleteBoard(@Args('boardNumber') boardNumber: number, @Args('password') password: number): Promise<Boolean> {
    this.logger.log(`deleteBoard()`);
    return await this.boardService.delete(boardNumber, password);
  }
}
