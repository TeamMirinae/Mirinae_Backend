import {
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import StaredMarkers from '@util/entity/stared.marker.entity';

@Entity('emotions')
export default class Emotions {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
  bitIndex: number;

  @Column('varchar', { length: 20 })
  standard: string;

  @Column('varchar', { length: 10 })
  dialect: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => StaredMarkers, (staredMarkers) => staredMarkers.emotions)
  staredMarkers: StaredMarkers[];
}
