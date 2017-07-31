import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { EmployeeListComponent } from './home-page/employee-list.component';
import { EmployeeService } from './shared/services/employee.service';
//import {LoginService} from './shared/services/login.service';
import {routing} from './app.routing';
import {NavBar} from './shared/components/nav-bar.component';
//import {Login} from './shared/components/login.component';

@NgModule({
  declarations: [AppComponent,EmployeeListComponent,NavBar],
    //Login
  imports: [BrowserModule,FormsModule,HttpModule,routing],
  //routing
  providers: [EmployeeService],
  //LoginService
  bootstrap: [AppComponent]
})
export class AppModule { }
