import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from 'app/pages/register/register.component';




export const routes: Routes = [
    { path: 'register',           component: RegisterComponent },
];

