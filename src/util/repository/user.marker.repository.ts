import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';

import UserMarkers from '@util/entity/user.marker.entity';

@Injectable()
export default class UserMarkerRepository extends Repository<UserMarkers> {
  constructor(private readonly dataSource: DataSource) {
    super(UserMarkers, dataSource.createEntityManager());
  }

  async findContribution(userId: number) {
    return await this.createQueryBuilder('userMarkers')
      .select()
      .leftJoinAndSelect('userMarkers.markers', 'marker')
      .where('userMarkers.userId = :userId', { userId: userId })
      .getMany();
  }

  async findContributionDetail(markerId: number) {
    return await this.createQueryBuilder('userMarkers')
      .select()
      .leftJoinAndSelect('userMarkers.markers', 'markers')
      .leftJoinAndSelect('markers.staredMarkers', 'staredMarkers')
      .where('userMarkers.markerId = :markerId', { markerId })
      .andWhere('userMarkers.userId = :userId', { userId: 1 })
      .getOne();
  }

  async createUserMarker(userMarkerDto: any) {
    return await this.createQueryBuilder('userMarkers')
      .insert()
      .into(UserMarkers)
      .values(userMarkerDto)
      .execute();
  }
}
