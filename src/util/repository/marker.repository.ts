import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';

import Markers from '@util/entity/marker.entity';

@Injectable()
export default class MarkerRepository extends Repository<Markers> {
  constructor(private readonly dataSource: DataSource) {
    super(Markers, dataSource.createEntityManager());
  }

  async findMarkerWithContributors(markerId: number) {
    return this.createQueryBuilder('markers')
      .select()
      .leftJoinAndSelect('markers.userMarkers', 'userMarkers')
      .where('markers.id = :id', { id: markerId })
      .getOne();
  }

  async findAroundMarker(latitude: number, longitude: number) {
    return await this.createQueryBuilder('markers')
      .addSelect(
        `FLOOR(1000 * 6371 * acos(cos(radians(${latitude})) * cos(radians(latitude)) * cos(radians(longitude) - radians(${longitude})) + sin(radians(${latitude})) * sin(radians(latitude))))`,
        'distance',
      )
      .having(`distance <= 50`)
      .orderBy('distance', 'ASC')
      .getOne();
  }

  async createMarker(markerDto: any) {
    return await this.createQueryBuilder('markers')
      .insert()
      .into(Markers)
      .values(markerDto)
      .execute();
  }
}
