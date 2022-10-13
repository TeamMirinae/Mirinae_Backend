import {
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import UserMarkers from '@util/entity/user.marker.entity';
import StaredMarkers from '@util/entity/stared.marker.entity';

@Entity('markers')
export default class Markers {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('double')
  latitude: number;

  @Column('double')
  longitude: number;

  @Column('int')
  count: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => StaredMarkers, (staredMarkers) => staredMarkers.markers)
  staredMarkers: StaredMarkers[];

  @OneToMany(() => UserMarkers, (userMarkers) => userMarkers.markers)
  userMarkers: UserMarkers[];
}
