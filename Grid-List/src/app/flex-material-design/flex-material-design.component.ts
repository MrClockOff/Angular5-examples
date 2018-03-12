import { Component, OnInit } from '@angular/core';
import { ObservableMedia } from '@angular/flex-layout';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

import { BaseTestComponent } from '../core/components/base-test.component';
import {TestService} from '../core/services/test.service';

const ColumnScreenSizeMap = new Map([
  ['xs', 1],
  ['sm', 1],
  ['md', 2],
  ['lg', 3],
  ['xl', 4]
]);

@Component({
  selector: 'test-flex-material-design',
  templateUrl: 'flex-material-design.component.html',
  styleUrls: ['flex-material-design.component.scss']
})
export class FlexMaterialDesignComponent extends BaseTestComponent implements OnInit {
  private _cols: Observable<number>;

  get cols(): Observable<number> {
    return this._cols;
  }

  constructor(testService: TestService,
              private readonly observableMedia: ObservableMedia) {
    super(testService);
  }

  ngOnInit() {
    let startColumns: number;

    ColumnScreenSizeMap.forEach((columns, mqAlias) => {
      if (this.observableMedia.isActive(mqAlias)) {
        startColumns = columns;
      }
    });

    this._cols = this.observableMedia.asObservable()
      .map(change => ColumnScreenSizeMap.get(change.mqAlias))
      .startWith(startColumns);
  }
}
