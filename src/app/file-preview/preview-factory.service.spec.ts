import { TestBed } from '@angular/core/testing';

import { PreviewFactoryService } from './preview-factory.service';

describe('PreviewFactoryService', () => {
  let service: PreviewFactoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreviewFactoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
