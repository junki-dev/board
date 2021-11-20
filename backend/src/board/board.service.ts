import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { BoardEntity } from './board.entity';
import { BoardInterface } from './interfaces/board.interface';
import { createHmac } from 'crypto';
import { BaseExceptionFilter } from '@nestjs/core';

@Injectable()
export class BoardService {
  constructor(
    @InjectRepository(BoardEntity)
    private readonly boardRepository: MongoRepository<BoardEntity>,
  ) {}

  private readonly logger = new Logger(BoardService.name);

  /**
   * 전체 게시글 조회
   * @returns {BoardEntity[]} 게시글 목록 데이터
   */
  findAll(): Promise<BoardEntity[]> {
    this.logger.log(`findAll()`);
    return this.boardRepository.find({ order: { boardNumber: 'DESC' } });
  }

  /**
   * 게시글 전체 개수 조회
   * @returns {number} 게시글 전체 개수
   */
  findBoardCount(): Promise<number> {
    this.logger.log(`findBoardCount()`);
    return this.boardRepository.count();
  }

  /**
   * 최신 글 조회
   * @returns {BoardEntity} 최신 글
   */
  findLatestBoard(): Promise<BoardEntity> {
    this.logger.log(`findLatestBoard()`);
    return this.boardRepository.findOne({ order: { boardNumber: 'DESC' } });
  }

  /**
   * 페이지 별 게시글 목록 조회
   * @returns {BoardEntity[]} 게시글 목록 데이터
   */
  findBoardByPage(page: number): Promise<BoardEntity[]> {
    this.logger.log(`findBoardByPage()`);
    const itemPerPage = 10;
    return this.boardRepository.find({
      order: { boardNumber: 'DESC' },
      take: itemPerPage,
      skip: (page - 1) * itemPerPage,
    });
  }

  /**
   * 게시글 번호로 게시글 조회
   * @returns {BoardEntity} 게시글 데이터
   */
  findBoardByNumber(boardNumber: number): Promise<BoardEntity> {
    this.logger.log(`findBoardByPage()`);
    return this.boardRepository.findOne({ boardNumber: boardNumber });
  }

  /**
   * 게시글 등록
   * @param {BoardInterface} input 게시글 입력 데이터
   * @returns {BoardEntity} 저장된 게시글 데이터
   */
  async create(input: BoardInterface): Promise<BoardEntity> {
    this.logger.log(`create()`);
    const latestBoard: BoardEntity = await this.findLatestBoard();
    const hash = createHmac('sha256', input.password).digest('hex'); // password hassing
    const date = input.date || new Date(); // 날짜값이 비어 있을 경우, 현재 시간으로 입력

    let newInput: BoardInterface = { ...input, boardNumber: latestBoard.boardNumber + 1, password: hash, date: date };
    return this.boardRepository.save(newInput);
  }

  /**
   * 게시글 수정
   * @param {BoardInterface} input 게시글 수정 데이터
   * @returns
   */
  async update(input: BoardInterface): Promise<any> {
    try {
      this.logger.log(`update()`);
      const board = await this.findBoardByNumber(input.boardNumber);
      const hash = createHmac('sha256', input.password).digest('hex'); // password hassing

      if (board.password !== hash) {
        throw new BaseExceptionFilter();
      }
      board.title = input.title;
      board.content = input.content;

      return this.boardRepository.updateOne(
        { boardNumber: input.boardNumber },
        { $set: { title: input.title, content: input.content } },
      );
    } catch (error) {
      this.logger.error(error);
    }
  }

  /**
   * 게시글 수정
   * @param {BoardInputInterface} input 게시글 수정 데이터
   * @returns {Boolean} 성공 여부
   */
  async delete(boardNumber: number, password: string): Promise<Boolean> {
    try {
      this.logger.log(`delete()`);
      const board = await this.findBoardByNumber(boardNumber);
      const hash = createHmac('sha256', password).digest('hex'); // password hassing

      if (board.password !== hash) {
        throw new BaseExceptionFilter();
      }

      return this.boardRepository
        .deleteOne({ boardNumber: boardNumber })
        .then(() => {
          return true;
        })
        .catch((error) => {
          this.logger.error(error);
          return false;
        });
    } catch (error) {
      this.logger.error(error);
    }
  }
}
