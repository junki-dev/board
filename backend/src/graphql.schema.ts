
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreateBoardInput {
    boardNumber?: Nullable<number>;
    title: string;
    content: string;
    date?: Nullable<Date>;
    password: string;
}

export abstract class IQuery {
    abstract boards(): Nullable<Nullable<Board>[]> | Promise<Nullable<Nullable<Board>[]>>;

    abstract boardTotalCount(): Nullable<number> | Promise<Nullable<number>>;

    abstract boardByPage(page?: Nullable<number>): Nullable<Nullable<Board>[]> | Promise<Nullable<Nullable<Board>[]>>;

    abstract boardByNumber(boardNumber?: Nullable<number>): Nullable<Board> | Promise<Nullable<Board>>;
}

export abstract class IMutation {
    abstract createBoard(createBoardInput?: Nullable<CreateBoardInput>): Nullable<Board> | Promise<Nullable<Board>>;

    abstract updateBoard(createBoardInput?: Nullable<CreateBoardInput>): Nullable<Board> | Promise<Nullable<Board>>;

    abstract deleteBoard(boardNumber: number, password: number): Nullable<boolean> | Promise<Nullable<boolean>>;
}

export class Board {
    boardNumber?: Nullable<number>;
    title?: Nullable<string>;
    content?: Nullable<string>;
    date?: Nullable<Date>;
    password?: Nullable<string>;
}

type Nullable<T> = T | null;
