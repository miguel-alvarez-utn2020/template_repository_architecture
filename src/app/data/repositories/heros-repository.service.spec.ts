import { TestBed } from '@angular/core/testing';

import { HerosRepositoryService } from './heros-repository.service';

describe('HerosRepositoryService', () => {
  let service: HerosRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HerosRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
