import { Component } from '@angular/core';

import {Observable} from 'rxjs/Observable';

import {TestItem} from '../models/test-item.model';

import {TestService} from '../services/test.service';

@Component({
  selector: 'test-base-component',
  template: ''
})
export class BaseTestComponent {
  readonly testCollection: Observable<TestItem[]>;

  constructor(testService: TestService) {
    this.testCollection = testService.fetch();
  }
}
