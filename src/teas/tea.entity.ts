import { BrewEntity } from 'src/brews/brew.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tea')
export class TeaEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  type: string;

  @OneToMany(() => BrewEntity, (brew) => brew.tea)
  brews?: BrewEntity[];
}
