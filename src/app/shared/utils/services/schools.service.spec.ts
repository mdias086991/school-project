import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { SchoolsService } from './schools.service';

describe('SchoolsService', () => {
  let service: SchoolsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HttpClient,
        HttpHandler
      ]
    });
    service = TestBed.inject(SchoolsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
