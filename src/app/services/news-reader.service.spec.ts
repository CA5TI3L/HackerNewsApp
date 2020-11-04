import { TestBed } from '@angular/core/testing';

import { NewsReaderService } from './news-reader.service';

describe('NewsReaderService', () => {
  let service: NewsReaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsReaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
