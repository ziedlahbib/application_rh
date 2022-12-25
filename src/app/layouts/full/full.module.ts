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
import { DashboardComponent } from 'app/dashboard/dashboard.component';
import { DashboardModule } from 'app/dashboard/dashboard.module';
import { ComponentsModule } from 'app/component/component.module';
/////////////////////////////////
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
//////////////////////////////////////////////////




@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    NgbModule,
    DashboardModule,
    ComponentsModule,
    //////////////
    MatPaginatorModule,

  
    
  ],
  entryComponents: [],
  exports: [
    RouterModule
  ]
})
export class FullModule { }
