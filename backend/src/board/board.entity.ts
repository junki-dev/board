import { Column, Entity, Index, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity()
export class BoardEntity {
  @ObjectIdColumn()
  id: ObjectID;

  @Index({ unique: true })
  @Column()
  boardNumber: number;

  @Column()
  title: string;

  @Column({ default: `` })
  content: string;

  @Column()
  date: Date;

  @Column()
  password: string;
}
