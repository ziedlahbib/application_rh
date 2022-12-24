import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from 'app/dashboard/dashboard.component';

export const routes: Routes = [
    { path: 'dashboard',           component: DashboardComponent },
];


