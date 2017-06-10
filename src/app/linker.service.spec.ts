import { TestBed, inject } from '@angular/core/testing';

import { LinkerService } from './linker.service';

describe('LinkerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LinkerService]
    });
  });

  it('should be created', inject([LinkerService], (service: LinkerService) => {
    expect(service).toBeTruthy();
  }));
});
