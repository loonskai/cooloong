import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { BrewEntity } from 'src/brews/brew.entity';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  login: string;

  @Column({ type: 'text', nullable: true })
  name?: string;

  @OneToMany(() => BrewEntity, (brew) => brew.user)
  brews?: BrewEntity[];
}
