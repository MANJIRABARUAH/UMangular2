import { Component } from '@angular/core';
import { EmployeeListComponent } from './home-page/employee-list.component';
import { NavBar } from './shared/components/nav-bar.component';


@Component({
    selector: 'pm-app',
 templateUrl: './app.component.html',
 styleUrls: ['./app.component.css']
})

export class AppComponent {
    pageTitle : string = 'UMDashboard';
    
}