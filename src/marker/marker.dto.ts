export class CreateMarkerDto {
  latitude: number;
  longitude: number;
  emotion: number;
  atmosphere: number[];

  constructor(json: any) {
    this.latitude = parseFloat(json['latitude'].replace(/"/g, ''));
    this.longitude = parseFloat(json['longitude'].replace(/"/g, ''));
    this.emotion = parseInt(json['emotion'].replace(/"/g, ''), 10);
    this.atmosphere = json['atmosphere']
      .replace(/"/g, '')
      .split(',')
      .map((value: string) => parseInt(value, 10));
  }
}
