import { TestBed } from '@angular/core/testing';

import { AncestriesService } from './ancestries.service';

describe('AncestriesService', () => {
  let service: AncestriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AncestriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
