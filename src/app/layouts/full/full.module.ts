import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { routes } from './full-routing.module';

import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SpinnerComponent } from 'app/shared/spinner.component';
import { NavigationComponent } from 'app/shared/header/navigation.component';
import { SidebarComponent } from 'app/shared/sidebar/sidebar.component';


@NgModule({
  declarations: [
    SpinnerComponent,
    NavigationComponent,
    SidebarComponent

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    NgbModule,
    
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class FullModule { }
