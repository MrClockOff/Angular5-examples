import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material';

import {BootstrapMaterialDesignRoutingModule} from './bootstrap-material-design-routing.module';

import {BootstrapMaterialDesignComponent} from './bootstrap-material-design.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    BootstrapMaterialDesignRoutingModule
  ],
  declarations: [
    BootstrapMaterialDesignComponent
  ]
})
export class BootstrapMaterialDesignModule {}
