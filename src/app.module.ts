import { Module } from '@nestjs/common';

import { UtilModule } from '@util/util.module';
import { MarkerModule } from '@marker/marker.module';

@Module({
  imports: [UtilModule, MarkerModule],
})
export class AppModule {}
