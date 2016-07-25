import { Component , Input , Output ,OnInit, OnChanges,SimpleChanges} from "@angular/core";

import { Employee } from "../../models/employee";
import { MD_BUTTON_DIRECTIVES } from  "@angular2-material/button";

@Component({
  selector: "employee-edit",
  templateUrl: "./app/components/employee-editor/employee-editor.component.html",
  directives: [MD_BUTTON_DIRECTIVES]
})
export class EmployeeEditComponent implements OnInit, OnChanges  {
     @Input("employee") employee : Employee;
     editedEmployee: Employee;

     constructor() {
     }

     // not needed in our case since ngOnChanges fires also when initializing the component
     ngOnInit(){
       this.setEditingData(this.employee);
     }

     ngOnChanges(changes: SimpleChanges): any{
        for(let change in changes){
          let newSelectedEmployee = changes['employee'].currentValue;
          this.setEditingData(newSelectedEmployee)
        }
     }
     doUpdate() {
       // todo Object assign is not safe 
        Object.assign(this.employee,this.editedEmployee);
     }

     private setEditingData(employee : Employee){
       // todo Object assign is not safe
        this.employee = employee;
        this.editedEmployee = Object.assign({},employee);
     }

}