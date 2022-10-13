import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { ImageService } from '@util/image.service';
import MarkerRepository from '@util/repository/marker.repository';
import UserMarkerRepository from '@util/repository/user.marker.repository';
import StaredMarkerRepository from '@util/repository/stared.marker.repository';
import Markers from '@util/entity/marker.entity';
import UtilService from '@util/util.service';
import UserMarkers from '@util/entity/user.marker.entity';
import AtmosphereRepository from '@util/repository/atmosphere.repository';
import EmotionRepository from '@util/repository/emotion.repository';
import StaredMarkers from '@util/entity/stared.marker.entity';
import { CreateMarkerDto } from '@marker/marker.dto';
import Atmospheres from '@util/entity/atmosphere.entity';

@Injectable()
class MarkerService {
  constructor(
    private readonly markerRepository: MarkerRepository,
    private readonly userMarkerRepository: UserMarkerRepository,
    private readonly staredMarkerRepository: StaredMarkerRepository,
    private readonly atmosphereRepository: AtmosphereRepository,
    private readonly emotionRepository: EmotionRepository,
    private readonly imageService: ImageService,
    private readonly utilService: UtilService,
  ) {}

  async findContribution(userId: number) {
    const contributions = await this.userMarkerRepository.findContribution(
      userId,
    );

    return contributions.map((contribution) => {
      return {
        id: contribution.markers.id,
        latitude: contribution.markers.latitude,
        longitude: contribution.markers.longitude,
        count: contribution.markers.count,
      };
    });
  }

  async findMarker(markerId: number) {
    const marker = await this.userMarkerRepository.findContributionDetail(
      markerId,
    );

    if (!marker) throw new NotFoundException();

    if (!marker.markers.staredMarkers) {
      return {
        status: 200,
        content: {
          id: markerId,
          atmosphere: this.utilService.transferDecimal(marker.atmosphereBit),
          emotion: marker.emotionBit,
          imageUrl: marker.imageUrl,
        },
      };
    }

    const atmosphere = await this.atmosphereRepository.findOneBy({
      id: marker.markers.staredMarkers[0].atmosphereId,
    });
    const emotion = await this.atmosphereRepository.findOneBy({
      id: marker.markers.staredMarkers[0].emotionId,
    });

    return {
      status: 201,
      content: {
        id: markerId,
        atmosphere: this.utilService.transferDecimal(marker.atmosphereBit),
        emotion: marker.emotionBit,
        count: marker.markers.count,
        imageUrl: marker.imageUrl,
        standard: this.utilService.transferString(
          atmosphere.standard,
          emotion.standard,
        ),
        dialect: this.utilService.transferString(
          atmosphere.dialect,
          emotion.dialect,
        ),
      },
    };
  }

  async createStaredMarker(marker: Markers) {
    const atmosphere: number[] = new Array<number>(8).fill(0);
    const emotion: number[] = new Array<number>(6).fill(0);

    marker.userMarkers.map((userMarker: UserMarkers) => {
      const userAtmosphere = this.utilService.transferDecimal(
        userMarker.atmosphereBit,
      );

      userAtmosphere.map((value) => {
        atmosphere[value] = atmosphere[value] + 1;
      });
      emotion[userMarker.emotionBit]++;
    });

    let atmosphereIdx = -1;
    let emotionIdx = -1;

    atmosphere.map((value) => {
      atmosphereIdx = atmosphereIdx >= value ? atmosphereIdx : value;
    });
    emotion.map((value) => {
      emotionIdx = emotionIdx >= value ? emotionIdx : value;
    });

    const atmosphereLanguages = await this.atmosphereRepository.findBy({
      bitIndex: atmosphereIdx,
    });
    const randIdx = Math.floor(Math.random() * atmosphereLanguages.length);
    const atmosphereLanguage: Atmospheres = atmosphereLanguages[randIdx];
    const emotionLanguage = await this.emotionRepository.findOneBy({
      bitIndex: emotionIdx,
    });

    const staredMarker = new StaredMarkers();
    staredMarker.markerId = marker.id;
    staredMarker.atmosphereId = atmosphereLanguage.id;
    staredMarker.emotionId = emotionLanguage.id;

    await this.staredMarkerRepository.save(staredMarker);
  }

  async createMarker(
    userId: number,
    createMarkerDto: CreateMarkerDto,
    file: Express.Multer.File,
  ) {
    const extension = file.mimetype.replace(/image\//gi, '.');

    if (
      !file ||
      (extension !== '.jpeg' && extension !== '.jpg' && extension !== '.png')
    )
      throw new BadRequestException();

    const aroundMarker = await this.markerRepository.findAroundMarker(
      createMarkerDto.latitude,
      createMarkerDto.longitude,
    );

    const markerId = aroundMarker
      ? aroundMarker.id
      : (
          await this.markerRepository.createMarker({
            latitude: createMarkerDto.latitude,
            longitude: createMarkerDto.longitude,
            count: 0,
          })
        ).raw['affectedRows'];

    if (
      await this.userMarkerRepository.findOneBy({
        userId: 1,
        markerId: markerId,
      })
    )
      throw new ForbiddenException();

    if (aroundMarker) {
      aroundMarker.count++;
      await this.markerRepository.save(aroundMarker);
    }

    this.userMarkerRepository
      .createUserMarker({
        userId,
        markerId,
        atmosphereBit: this.utilService.transferBinary(
          createMarkerDto.atmosphere,
        ),
        emotionBit: createMarkerDto.emotion,
        imageUrl: '',
      })
      .then(async (result) => {
        await this.imageService
          .uploadImage(
            `${userId.toString()}/${new Date().getTime()}`,
            file.buffer,
            file.mimetype,
          )
          .then(async (location: string) => {
            const userMarker: UserMarkers =
              await this.userMarkerRepository.findOneBy({
                id: result.raw['insertId'],
              });

            userMarker.imageUrl = location;

            await this.userMarkerRepository.save(userMarker);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));

    const result: Markers =
      await this.markerRepository.findMarkerWithContributors(markerId);

    if (result.count === 5)
      this.createStaredMarker(result).catch((err) => console.log(err));

    return {
      id: result.id,
      latitude: result.latitude,
      longitude: result.longitude,
      count: result.count,
    };
  }
}

export default MarkerService;
