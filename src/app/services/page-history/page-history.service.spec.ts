/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PageHistoryService } from './page-history.service';

describe('Service: PageHistory', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PageHistoryService]
    });
  });

  it('should ...', inject([PageHistoryService], (service: PageHistoryService) => {
    expect(service).toBeTruthy();
  }));
});
