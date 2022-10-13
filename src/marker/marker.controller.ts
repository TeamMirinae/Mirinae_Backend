import {
  BadRequestException,
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

@Controller('marker')
class MarkerController {
  constructor(private readonly markerService: MarkerService) {}

  @Get('/contribution/:userId')
  async findContribution(@Param('userId', ParseIntPipe) userId) {
    if (!userId) throw new BadRequestException();

    return await this.markerService.findContribution(userId);
  }

  @Get('/:markerId')
  async findMarkerDetail(
    @Res() res,
    @Param('markerId', ParseIntPipe) markerId: number,
  ) {
    if (!markerId) throw new BadRequestException();

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
    if (!userId || !file) throw new BadRequestException();

    const createMarkerDto: CreateMarkerDto = new CreateMarkerDto(body);

    return await this.markerService.createMarker(userId, createMarkerDto, file);
  }
}

export default MarkerController;
