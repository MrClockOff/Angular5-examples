import { Component } from '@angular/core';

import { BaseTestComponent } from '../core/components/base-test.component';

@Component({
  selector: 'test-bootstrap',
  templateUrl: 'bootstrap.component.html',
  styleUrls: ['bootstrap.component.scss']
})
export class BootstrapComponent extends BaseTestComponent {}
