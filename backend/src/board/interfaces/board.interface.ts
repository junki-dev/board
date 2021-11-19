export interface BoardCommonInterface {
  boardNumber: number;
  title: string;
  content: string;
  date: Date;
}

export interface BoardInterface extends BoardCommonInterface {
  password: string;
}

export interface BoardInputInterface {
  boardNumber: number;
  title: string;
  content: string;
  date?: Date;
  password: number;
}
