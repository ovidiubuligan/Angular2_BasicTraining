import { Injectable } from '@angular/core';

import { Employee } from '../models/employee';

@Injectable()
export class EmployeeService {
  getEmployees() {
    return Promise.resolve(getMockData ());
  }

  getEmployeeSlowly() {
    return new Promise<Employee[]>(resolve =>
      setTimeout(()=>resolve(getMockData()), 2000) // 2 seconds
    );
  }

  getEmployee(id: number) {
    return Promise.resolve(getMockData ()).then(
      employees => employees.filter(emp => emp.ID === id)[0]
    );
  }
}


var MOCK_Employees: Employee[] = undefined;
function getMockData (): Employee[]{   
   if(!MOCK_Employees){
     MOCK_Employees=[]
     for (var index = 0; index < 20; index++) {
         MOCK_Employees[index] = new Employee(index,`name ${index}`,`Department ${index%5}`,100+ Math.random()*100, "adasdasdasd");     
     }   
   }
   return MOCK_Employees;
}