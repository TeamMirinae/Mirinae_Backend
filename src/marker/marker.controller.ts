import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

import MarkerService from '@marker/marker.service';
import { CreateMarkerDto } from '@marker/marker.dto';
import { ImageService } from '@util/image.service';

@Controller('marker')
class MarkerController {
  constructor(
    private readonly markerService: MarkerService,
    private readonly imageService: ImageService,
  ) {}

  @Get('/contribution/:userId')
  async findContribution(@Param('userId', ParseIntPipe) userId) {
    return await this.markerService.findContribution(userId);
  }

  @Get('/:markerId')
  async findMarkerDetail(
    @Res() res,
    @Param('markerId', ParseIntPipe) markerId: number,
  ) {
    const result = await this.markerService.findMarker(markerId);

    res.status(result.status).json(result.content);
  }

  @Post('/create/:userId')
  @UseInterceptors(FileInterceptor('image'))
  async createUserMarker(
    @Body() body,
    @Param('userId', ParseIntPipe) userId,
    @UploadedFile() file: Express.Multer.File,
  ) {
    const createMarkerDto: CreateMarkerDto = new CreateMarkerDto(body);

    return await this.markerService.createMarker(userId, createMarkerDto, file);
  }
}

export default MarkerController;
