import { EmployeeListComponent } from './employee-list.component';
import { EmployeeDetailComponent } from '../shared/components/employees/employee-detail.component';
 
export const EmployeesRoutes = [
    { path: 'employees', component: EmployeeListComponent },
    { path: 'employee/:id', component: EmployeeDetailComponent }
]