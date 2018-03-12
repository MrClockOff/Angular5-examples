import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BootstrapRoutingModule } from './bootstrap-routing.module';

import { BootstrapComponent } from './bootstrap.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    BootstrapRoutingModule
  ],
  declarations: [
    BootstrapComponent
  ]
})
export class BootstrapModule {}
