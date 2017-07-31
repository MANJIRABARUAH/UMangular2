import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './home-page/employee-list.component';
import { Component } from '@angular/core';
import { AppComponent } from './app.component';
//import {Login} from './shared/components/login.component';


const appRoutes: Routes = [
 
  {
    path: 'employees',
    component: EmployeeListComponent
  },
 /* {
    path: 'login',
    component: Login
  },*/
  
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);