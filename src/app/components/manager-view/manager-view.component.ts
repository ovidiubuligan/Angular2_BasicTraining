import { Component, ViewEncapsulation } from '@angular/core';

import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee.service';
import { EmployeeEditComponent } from "../employee-editor/employee-editor.component"
import { MD_LIST_DIRECTIVES } from  '@angular2-material/list';

@Component({
  selector: 'manager-view',
  templateUrl: './app/components/manager-view/manager-view.component.html',
  directives:[MD_LIST_DIRECTIVES,EmployeeEditComponent],
  encapsulation: ViewEncapsulation.Native,
  styles:[
    `
  .flex-container {

      display: inline-flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: center;
      align-content: stretch;
      align-items: center;
      }

  .flex-item:nth-child(1) {
      order: 0;
      flex: 0 1 auto;
      align-self: auto;
      }

  .flex-item:nth-child(2) {
      order: 0;
      flex: 0 1 auto;
      align-self: auto;
      }
    `
  ]
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