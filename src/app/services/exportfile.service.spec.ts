import { TestBed } from '@angular/core/testing';

import { ExportfileService } from './exportfile.service';

describe('ExportfileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExportfileService = TestBed.get(ExportfileService);
    expect(service).toBeTruthy();
  });
});
