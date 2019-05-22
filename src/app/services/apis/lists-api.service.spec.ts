import { TestBed } from '@angular/core/testing';

import { ListsApiService } from './lists-api.service';

describe('ListsApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListsApiService = TestBed.get(ListsApiService);
    expect(service).toBeTruthy();
  });
});
