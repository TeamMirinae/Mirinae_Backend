import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as AWS from 'aws-sdk';
import * as sharp from 'sharp';

@Injectable()
export class ImageService {
  private readonly s3 = new AWS.S3();

  constructor(private readonly configService: ConfigService) {
    this.s3.config.update({
      credentials: {
        accessKeyId: this.configService.get('s3Config.uid'),
        secretAccessKey: this.configService.get('s3Config.secret'),
      },
      region: this.configService.get('s3Config.region'),
    });
  }

  async uploadImage(
    filename: string,
    image: Buffer,
    mimeType: string,
  ): Promise<string> {
    const result = await this.s3
      .upload({
        Bucket: this.configService.get('s3Config.name'),
        Key: filename,
        Body: image,
        ACL: 'public-read',
        ContentType: mimeType,
        ContentDisposition: 'inline',
      })
      .promise();
    return result.Location;
  }
}
