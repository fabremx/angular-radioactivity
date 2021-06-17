import { Injectable } from '@angular/core';

export type RadioactivityLevel = 'low' | 'medium' | 'high' | 'critical';
interface MappingRadioactivityLevel {
  start: number
  end: number
  output: RadioactivityLevel
}

@Injectable({
  providedIn: 'root'
})
export class RadioactivityService {

  constructor() { }

  getRadioacvityLevel(radioactivityValue: number): RadioactivityLevel {
    const mapping: MappingRadioactivityLevel[] = [
      { start: 0, end: 50, output: 'low' },
      { start: 51, end: 100, output: 'medium' },
      { start: 101, end: 150, output: 'high' },
      { start: 151, end: Infinity, output: 'critical' },
    ]

    return (mapping
      .find((map) => this.isRange(radioactivityValue, map.start, map.end)) as MappingRadioactivityLevel)
      .output
  }

  private isRange(value: number, start: number, end: number): boolean {
    return value >= start && value <= end;
  }
}
