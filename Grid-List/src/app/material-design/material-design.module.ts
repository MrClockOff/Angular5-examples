import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule, MatCardModule } from '@angular/material';

import { MaterialDesignComponent } from './material-design.component';
import { MaterialDesignRoutingModule } from './material-design-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialDesignRoutingModule,
    MatGridListModule,
    MatCardModule
  ],
  declarations: [
    MaterialDesignComponent
  ],
  providers: []
})
export class MaterialDesignModule {}
