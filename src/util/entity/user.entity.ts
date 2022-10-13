import {
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import UserMarkers from '@util/entity/user.marker.entity';

@Entity('users')
export default class Users {
  @PrimaryGeneratedColumn()
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
