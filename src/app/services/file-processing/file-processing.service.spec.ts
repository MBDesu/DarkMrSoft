import { TestBed } from '@angular/core/testing';

import { FileProcessingService } from './file-processing.service';

describe('FileProcessingService', () => {
  let service: FileProcessingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FileProcessingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
