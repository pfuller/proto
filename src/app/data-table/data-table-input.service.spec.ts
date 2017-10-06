import { TestBed, inject } from '@angular/core/testing';

import { DataTableInputService } from './data-table-input.service';

describe('DataTableInputService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataTableInputService]
    });
  });

  it('should be created', inject([DataTableInputService], (service: DataTableInputService) => {
    expect(service).toBeTruthy();
  }));
});
