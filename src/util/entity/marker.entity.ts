import {
  Entity,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  OneToMany,
} from 'typeorm';
import UserMarkers from '@util/entity/user.marker.entity';
import StaredMarkers from '@util/entity/stared.marker.entity';

@Entity('markers')
export default class Markers {
  @PrimaryColumn()
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

  @OneToMany(() => UserMarkers, (userMarkers) => userMarkers.markers)
  userMarkers: UserMarkers[];

  @OneToMany(() => StaredMarkers, (staredMarkers) => staredMarkers.markers)
  staredMarkers: StaredMarkers[];
}
