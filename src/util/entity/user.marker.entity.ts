import {
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import Users from '@util/entity/user.entity';
import Markers from '@util/entity/marker.entity';

@Entity('user_markers')
export default class UserMarkers {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
  userId: number;

  @Column('int')
  markerId: number;

  @Column('int')
  atmosphereBit: number;

  @Column('int')
  emotionBit: number;

  @Column('varchar', { length: 200 })
  imageUrl: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Users, (users) => users.userMarkers)
  @JoinColumn({ name: 'userId', referencedColumnName: 'id' })
  users: Users;

  @ManyToOne(() => Markers, (markers) => markers.userMarkers)
  @JoinColumn({ name: 'markerId', referencedColumnName: 'id' })
  markers: Markers;
}
