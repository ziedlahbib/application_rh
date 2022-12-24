import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InscriptionComponent } from 'app/pages/usermanagment/inscription/InscriptionComponent';
import { routes } from './auth-layout-routing.module';
import { AuthLayoutComponent } from './auth-layout.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    // NgbModule
  ],
  declarations: [
    InscriptionComponent,
    ],
})
export class AuthLayoutModule { }
