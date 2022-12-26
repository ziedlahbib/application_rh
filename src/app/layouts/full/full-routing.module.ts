import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TableComponent } from 'app/component/table/table.component';
import { DashboardComponent } from 'app/dashboard/dashboard.component';
import { AjoutCanditatureComponent } from 'app/pages/candidature-management/ajout-canditature/ajout-canditature.component';
import { CandidatureManagementComponent } from 'app/pages/candidature-management/candidature-management.component';
import { AjouterComponent } from 'app/pages/offre-management/ajouter/ajouter.component';
import { ModifieroffreComponent } from 'app/pages/offre-management/modifieroffre/modifieroffre.component';
import { OffreManagementComponent } from 'app/pages/offre-management/offre-management.component';
import { ModifierComponent } from 'app/pages/user-management/modifier/modifier.component';
import { UserManagementComponent } from 'app/pages/user-management/user-management.component';

export const routes: Routes = [
    { path: 'dashboard',           component: DashboardComponent },
    { path: 'user-management',           component: UserManagementComponent },
    { path: 'user-management/modifier/:id',           component: ModifierComponent },
    { path: 'ajouteroffre',           component: AjouterComponent },
    { path: 'gestion-des-offre',           component: OffreManagementComponent },
    { path: 'modifier/:id',           component: ModifieroffreComponent },
    { path: 'candidature-management',           component: CandidatureManagementComponent },
    { path: 'ajout-canditature',           component: AjoutCanditatureComponent },
    
    
];


