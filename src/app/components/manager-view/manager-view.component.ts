import { Component } from '@angular/core';

import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'manager-view',
  templateUrl: './app/components/manager-view/manager-view.component.html'
})
export class ManagerViewComponent { 
     employees :Employee[] =[]

     constructor(private _employeeService: EmployeeService){
        _employeeService.getEmployees()
                        .then(emps => {this.employees = emps; console.log(emps.length)});
     }

  
}