import {
  Entity,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  OneToMany,
} from 'typeorm';
import UserMarkers from '@util/entity/user.marker.entity';

@Entity('users')
export default class Users {
  @PrimaryColumn()
  id: number;

  @Column('varchar', { length: 20 })
  nickname: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => UserMarkers, (userMarkers) => userMarkers.userId)
  userMarkers: UserMarkers[];
}
