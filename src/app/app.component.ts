import { Component } from '@angular/core';

import {EmployeeService} from './services/employee.service';
import {ManagerViewComponent} from './components/manager-view/manager-view.component';

@Component({
  selector: 'my-app',
  template: `<h1>My First Angular 2 App</h1>
            <manager-view></manager-view>`,
  directives:[ManagerViewComponent],
  providers: [    
    EmployeeService
  ],
  // styles can be declared inline 
  styles: [`
      h1 {
        color: #369;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 250%;
      }
      body {
        margin: 2em;
      }
  `]
})
export class AppComponent { }