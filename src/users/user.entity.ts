import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { BrewEntity } from 'src/brews/brew.entity';

@Entity('users')
@Unique(['email', 'login'])
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  login: string;

  @Column({ nullable: true })
  password?: string;

  @Column({ nullable: true })
  name?: string;

  @OneToMany(() => BrewEntity, (brew) => brew.user)
  brews?: BrewEntity[];
}
