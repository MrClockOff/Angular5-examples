import { Component } from '@angular/core';

import { BaseTestComponent } from '../core/components/base-test.component';

@Component({
  selector: 'test-material-design',
  templateUrl: 'material-design.component.html',
  styleUrls: ['material-design.component.scss']
})
export class MaterialDesignComponent extends BaseTestComponent {}
