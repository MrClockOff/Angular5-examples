import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { BootstrapComponent } from './bootstrap.component';

const bootstrapRoutes: Routes = [
  {path: 'bootstrap', component: BootstrapComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(bootstrapRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class  BootstrapRoutingModule {}
