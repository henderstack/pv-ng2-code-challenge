/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ArrSubstituteBaseService } from './arr-substitute-base.service';

describe('ArrSubstituteBaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArrSubstituteBaseService]
    });
  });

  it('should ...', inject([ArrSubstituteBaseService], (service: ArrSubstituteBaseService) => {
    expect(service).toBeTruthy();
  }));
});
