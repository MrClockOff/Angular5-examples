import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { MaterialDesignComponent } from './material-design.component';

const materialDesignRoutes: Routes = [
  {path: 'material', component: MaterialDesignComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(materialDesignRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MaterialDesignRoutingModule {}
