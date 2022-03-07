import { Column, CreateDateColumn, Entity, Index, PrimaryGeneratedColumn, Unique } from "typeorm";

@Index('username', ['username'], { unique: true })
@Entity({ schema: 'nest', name: 'users' })
@Unique(['id'])
export class Users {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id'})
  id: number

  @Column('varchar', { name: 'username', unique: true, length: 30 })
  username: string;

  @Column('varchar', {name: 'password', length: 100 })
  password: string;

  @CreateDateColumn({ name: 'createdAt', type: 'datetime' })
  createdAt: Date;

  @CreateDateColumn({ name: 'updatedAt', type: 'datetime' })
  updatedAt: Date;
}
