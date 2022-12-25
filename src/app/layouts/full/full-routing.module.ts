import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TableComponent } from 'app/component/table/table.component';
import { DashboardComponent } from 'app/dashboard/dashboard.component';
import { ModifierComponent } from 'app/pages/user-management/modifier/modifier.component';
import { UserManagementComponent } from 'app/pages/user-management/user-management.component';

export const routes: Routes = [
    { path: 'dashboard',           component: DashboardComponent },
    { path: 'user-management',           component: UserManagementComponent },
    { path: 'user-management/modifier/:id',           component: ModifierComponent, },
];


