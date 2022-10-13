import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateMarkerDto {
  latitude: number;
  longitude: number;
  emotion: number;
  atmosphere: number[];

  constructor(json: any) {
    this.latitude = parseFloat(json['latitude']);
    this.longitude = parseFloat(json['longitude']);
    this.emotion = parseInt(json['emotion'], 10);
    this.atmosphere = json['atmosphere']
      .split(',')
      .map((value: string) => parseInt(value, 10));
  }
}
