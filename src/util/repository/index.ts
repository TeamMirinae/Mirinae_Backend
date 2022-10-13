import MarkerRepository from '@util/repository/marker.repository';
import UserMarkerRepository from '@util/repository/user.marker.repository';
import StaredMarkerRepository from '@util/repository/stared.marker.repository';
import EmotionRepository from '@util/repository/emotion.repository';
import AtmosphereRepository from '@util/repository/atmosphere.repository';

const Repositories = [
  MarkerRepository,
  UserMarkerRepository,
  StaredMarkerRepository,
  EmotionRepository,
  AtmosphereRepository,
];

export default Repositories;
