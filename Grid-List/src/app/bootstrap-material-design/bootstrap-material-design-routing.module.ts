import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { BootstrapMaterialDesignComponent } from './bootstrap-material-design.component';

const bootstrapMaterialDesignRoutes: Routes = [
  {path: 'bootstrap-material', component: BootstrapMaterialDesignComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(bootstrapMaterialDesignRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class BootstrapMaterialDesignRoutingModule {}
