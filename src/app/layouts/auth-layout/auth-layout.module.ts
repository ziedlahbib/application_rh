import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { routes } from './auth-layout-routing.module';
import { RegisterComponent } from 'app/pages/register/register.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    // NgbModule
  ],
  declarations: [
    RegisterComponent
    ],
})
export class AuthLayoutModule { }
