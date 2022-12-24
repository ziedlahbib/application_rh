import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { FullComponent } from "./layouts/full/FullComponent";

export const Approutes: Routes = [
  {
    path: '',
    redirectTo: 'register',
    pathMatch: 'full',
  }, 
  {
    path: '',
    component: FullComponent,
    children: [
        {
      path: '',
      loadChildren: () => import('./layouts/full/full.module').then(x => x.FullModule)
  }]}, 
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./layouts/auth-layout/auth-layout.module').then(m => m.AuthLayoutModule)
      }
    ]
  },

];
@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(Approutes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
