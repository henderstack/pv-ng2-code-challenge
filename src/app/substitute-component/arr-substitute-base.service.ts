import { Injectable } from '@angular/core';

import {ONEONEHUNDRED} from './one-onehundred-mock';

@Injectable()
export class ArrSubstituteBaseService {
    getOneHundred():Array<String> {
      return ONEONEHUNDRED;
    }
  }
