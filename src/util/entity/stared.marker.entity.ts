import {
  Entity,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import Markers from '@util/entity/marker.entity';
import Atmospheres from '@util/entity/atmosphere.entity';
import Emotions from '@util/entity/emotion.entity';

@Entity('stared_markers')
export default class StaredMarkers {
  @PrimaryColumn()
  id: number;

  @Column('int')
  markerId: number;

  @Column('int')
  atmosphereId: number;

  @Column('int')
  emotionId: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Markers, (markers) => markers.staredMarkers)
  @JoinColumn({ name: 'markerId', referencedColumnName: 'id' })
  markers: Markers;

  @ManyToOne(() => Atmospheres, (atmospheres) => atmospheres.staredMarkers)
  @JoinColumn({ name: 'atmosphereId', referencedColumnName: 'id' })
  atmospheres: Atmospheres;

  @ManyToOne(() => Emotions, (emotions) => emotions.staredMarkers)
  @JoinColumn({ name: 'emotionId', referencedColumnName: 'id' })
  emotions: Emotions;
}
