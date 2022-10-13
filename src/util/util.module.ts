import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

import EnvConfig from '@util/env.service';
import Entities from '@util/entity';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath:
        process.env.NODE_ENV === 'dev'
          ? '.env.dev'
          : process.env.NODE_ENV === 'prod'
          ? '.env.prod'
          : '.env.test',
      load: [EnvConfig],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('dbConfig.host'),
        port: configService.get('dbConfig.port'),
        username: configService.get('dbConfig.username'),
        password: configService.get('dbConfig.password'),
        database: configService.get('dbConfig.name'),
        charset: 'utf8mb4_general_ci',
        timezone: '+09:00',
        synchronize: true, // todo: production environ = false
        logging: ['error'],
        logger: 'file',
        maxQueryExecutionTime: 2000,
        entities: [...Entities],
      }),
    }),
  ],
  providers: [],
  exports: [ConfigModule],
})
export class UtilModule {}
