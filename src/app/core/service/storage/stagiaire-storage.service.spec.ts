import { TestBed } from '@angular/core/testing';

import { StagiaireStorageService } from './stagiaire-storage.service';

describe('StagiaireStorageService', () => {
  let service: StagiaireStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StagiaireStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
