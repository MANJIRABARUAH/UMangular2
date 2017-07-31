import {Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { IEmployee } from '../models/employee';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class EmployeeService {
    employees: IEmployee[];
    private employeesUrl = 'http://localhost:8180/ngapp/rest/employeeService/listOfEmployees';

    constructor( private http: Http ) { }

    getEmployees(): Observable<IEmployee[]> {
        return this.http.get( this.employeesUrl )
            .map(( response: Response ) => {
                this.employees = response.json();
                return this.employees;
            })
            .catch( this.handleError );
    }
    
    private handleError( error: any ) {
        console.error( error );
        return Observable.throw( error.json().error || 'Server error' );
    }
    }