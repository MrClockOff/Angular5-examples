import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { MaterialDesignModule } from './material-design/material-design.module';
import { FlexMaterialDesignModule } from './flex-material-design/flex-material-design.module';
import { BootstrapModule } from './bootstrap/bootstrap.module';
import {BootstrapMaterialDesignModule} from './bootstrap-material-design/bootstrap-material-design.module';

import { AppComponent } from './app.component';
import { BaseTestComponent } from './core/components/base-test.component';

import { TestService } from './core/services/test.service';

@NgModule({
  declarations: [
    AppComponent,
    BaseTestComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    MaterialDesignModule,
    FlexMaterialDesignModule,
    BootstrapModule,
    BootstrapMaterialDesignModule,
    AppRoutingModule
  ],
  providers: [
    TestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
