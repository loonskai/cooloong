import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tea')
export class TeaEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
