import { Injectable } from '@angular/core';
import { Cache } from '../library/cache';

@Injectable()
export class StateService {
  enableProtection = true;
  cache = new Cache();
}
