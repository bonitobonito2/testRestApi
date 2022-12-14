import { isNumber } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  userName: string;
  @Column()
  email: string;
  @Column()
  password: string;

}
