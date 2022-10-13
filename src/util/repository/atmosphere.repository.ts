import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';

import Atmospheres from '@util/entity/atmosphere.entity';

@Injectable()
export default class AtmosphereRepository extends Repository<Atmospheres> {
  constructor(private readonly dataSource: DataSource) {
    super(Atmospheres, dataSource.createEntityManager());
  }
}
