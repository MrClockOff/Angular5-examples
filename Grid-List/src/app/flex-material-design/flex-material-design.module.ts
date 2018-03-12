import { NgModule } from '@angular/core';
import { MatCardModule, MatGridListModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FlexMaterialDesignRoutingModule } from './flex-material-design-routing.module';

import { FlexMaterialDesignComponent } from './flex-material-design.component';


@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    FlexMaterialDesignRoutingModule,
    MatCardModule,
    MatGridListModule
  ],
  declarations: [
    FlexMaterialDesignComponent
  ]
})
export class FlexMaterialDesignModule {}
