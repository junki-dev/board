export interface Boards {
  boards: Board[];
  boardTotalCount: number;
}

export interface Board {
  boardNumber?: number;
  title: string;
  content: string;
  date?: Date;
  password?: string;
}
