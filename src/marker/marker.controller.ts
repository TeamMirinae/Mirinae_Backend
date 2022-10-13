import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Req,
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

  @Get('/contribution')
  async findContribution() {
    return await this.markerService.findContribution(1);
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
