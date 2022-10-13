import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';

import Emotions from '@util/entity/emotion.entity';

@Injectable()
export default class EmotionRepository extends Repository<Emotions> {
  constructor(private readonly dataSource: DataSource) {
    super(Emotions, dataSource.createEntityManager());
  }
}
