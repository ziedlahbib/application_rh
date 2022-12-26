import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { ViewChild} from '@angular/core';;
import {MatSort, SortDirection} from '@angular/material/sort';
import { MatTableDataSource,MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
///////////////////////////////////////////////
import { ModifierComponent } from 'app/pages/user-management/modifier/modifier.component';
import { UserManagementComponent } from 'app/pages/user-management/user-management.component';
import { OffreManagementComponent } from 'app/pages/offre-management/offre-management.component';
import { AjouterComponent } from 'app/pages/offre-management/ajouter/ajouter.component';
import { ModifieroffreComponent } from 'app/pages/offre-management/modifieroffre/modifieroffre.component';
import { CandidatureManagementComponent } from 'app/pages/candidature-management/candidature-management.component';
import { AjoutCanditatureComponent } from 'app/pages/candidature-management/ajout-canditature/ajout-canditature.component';
//////////////////////////////////////////////////
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';




@NgModule({
  declarations: [
    SpinnerComponent,
    NavigationComponent,
    SidebarComponent,
    ModifierComponent,
    UserManagementComponent,
    OffreManagementComponent,
    AjouterComponent,
    ModifieroffreComponent,
    CandidatureManagementComponent,
    AjoutCanditatureComponent
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
    ReactiveFormsModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatNativeDateModule

  
    
  ],
  entryComponents: [],
  exports: [
    RouterModule
  ],
})
export class FullModule { }
