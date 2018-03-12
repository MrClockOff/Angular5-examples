import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { FlexMaterialDesignComponent } from './flex-material-design.component';

const flexMaterialDesignRoutes: Routes = [
  {path: 'flex-material', component: FlexMaterialDesignComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(flexMaterialDesignRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class FlexMaterialDesignRoutingModule {}
