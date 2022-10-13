import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import StaredMarkers from '@util/entity/stared.marker.entity';

@Injectable()
export default class StaredMarkerRepository extends Repository<StaredMarkers> {
  constructor(private readonly dataSource: DataSource) {
    super(StaredMarkers, dataSource.createEntityManager());
  }

  async createStaredMarker(staredMarkerDto: any) {
    return await this.createQueryBuilder('staredMarkers')
      .insert()
      .into(StaredMarkers)
      .values(staredMarkerDto)
      .execute();
  }
}
