import { Injectable } from '@nestjs/common';

@Injectable()
class UtilService {
  isHaveVowel(text: string) {
    return Math.floor((text.charCodeAt(0) - 44032) % 28) > 0;
  }

  transferString(str1: string, str2: string) {
    return `${str1}${
      this.isHaveVowel(str1[str1.length - 1]) ? '은' : '는'
    } ${str2}`;
  }

  transferBinary(value: number[] | number): number {
    if (!(value instanceof Array)) return 1 << value;
    else return value.reduce((a, b) => a + (1 << b), 0);
  }

  transferDecimal(value: number): number[] {
    const decimal: number[] = [];

    for (let i = 0; i < 8; i++) {
      const num = value & 1;
      if (num) decimal.push(i);
      value >>= 1;
    }
    return decimal;
  }
}

export default UtilService;
