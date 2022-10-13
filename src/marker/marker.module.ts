import { Global, Module } from '@nestjs/common';

import MarkerService from '@marker/marker.service';
import MarkerController from '@marker/marker.controller';

@Global()
@Module({
  controllers: [MarkerController],
  providers: [MarkerService],
})
export class MarkerModule {}
