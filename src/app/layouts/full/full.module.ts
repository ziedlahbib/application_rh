import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { routes } from './full-routing.module';
import { SpinnerComponent } from 'app/shared/spinner.component';
import { NavigationComponent } from 'app/shared/header/navigation.component';
import { SidebarComponent } from 'app/shared/sidebar/sidebar.component';
import { RegisterComponent } from 'app/pages/register/register.component';




@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    NgbModule,
    
  ],
  entryComponents: [],
  exports: [
    RouterModule
  ]
})
export class FullModule { }
