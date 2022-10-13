import {
  Entity,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  OneToMany,
} from 'typeorm';
import StaredMarkers from '@util/entity/stared.marker.entity';

@Entity('atmospheres')
export default class Atmospheres {
  @PrimaryColumn()
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

  @OneToMany(() => StaredMarkers, (staredMarkers) => staredMarkers.atmospheres)
  staredMarkers: StaredMarkers[];
}
