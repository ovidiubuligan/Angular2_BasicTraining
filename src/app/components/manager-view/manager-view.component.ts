import { Component } from '@angular/core';

import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee.service';
import { MD_LIST_DIRECTIVES } from  '@angular2-material/list';

@Component({
  selector: 'manager-view',
  templateUrl: './app/components/manager-view/manager-view.component.html',
  directives:[MD_LIST_DIRECTIVES]
})
export class ManagerViewComponent { 
     employees :Employee[] =[]
     selectedEmployee: Employee;

     constructor(private _employeeService: EmployeeService){
        _employeeService.getEmployees()
                        .then(emps => {this.employees = emps; console.log(emps.length)});
     }

     onSelect(selectedEmp:Employee){
       this.selectedEmployee = selectedEmp;
     }
  
}