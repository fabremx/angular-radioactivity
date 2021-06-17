import { TestBed } from '@angular/core/testing';

import { RadioactivityService, RadioactivityLevel } from './radioactivity.service';

describe('RadioactivityService', () => {
  let service: RadioactivityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RadioactivityService);
  });

  [0, 20, 50].forEach((radioactivityValue) => {
    it('should return "low" when radioactivity is inferior to 51 bequerel', () => {
      // When
      const result: RadioactivityLevel = service.getRadioacvityLevel(radioactivityValue);
      // Then
      expect(result).toBe('low')
    });
  });

  [51, 80, 100].forEach((radioactivityValue) => {
    it('should return "medium" when radioactivity is suprerior to 50 and inferior to 101 bequerel', () => {
      // When
      const result: RadioactivityLevel = service.getRadioacvityLevel(radioactivityValue);
      // Then
      expect(result).toBe('medium')
    });
  });

  [101, 120, 150].forEach((radioactivityValue) => {
    it('should return "high" when radioactivity is suprerior to 100 and inferior to 151 bequerel', () => {
      // When
      const result: RadioactivityLevel = service.getRadioacvityLevel(radioactivityValue);
      // Then
      expect(result).toBe('high')
    });
  });

  [151, 12045].forEach((radioactivityValue) => {
    it('should return "critical" when radioactivity is suprerior to 150', () => {
      // When
      const result: RadioactivityLevel = service.getRadioacvityLevel(radioactivityValue);
      // Then
      expect(result).toBe('critical')
    });
  });
});
