import { TeaEntity } from 'src/teas/tea.entity';
import { UserEntity } from 'src/users/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('brews')
export class BrewEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column() // TODO: convert to Date type
  date: string;

  @Column()
  userId: number;

  @Column()
  teaId: number;

  @ManyToOne(() => UserEntity, (user) => user.brews)
  user: UserEntity;

  @ManyToOne(() => TeaEntity, (tea) => tea.brews)
  tea: TeaEntity;
}
