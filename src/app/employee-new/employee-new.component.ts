import { Component, OnInit } from '@angular/core';
import employees from '../employees';
import {Employee, EmployeeService} from '../employee.service';

@Component({
  selector: 'employee-new',
  templateUrl: './employee-new.component.html',
  styleUrls: ['./employee-new.component.css']
})
export class EmployeeNewComponent implements OnInit {

  //vai criar uma variavel para armazenar o nome, usando o conceito de data bildin
  employee: Employee = {
    name: '',
    salario: 0,
    bonus: 0,
};
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
  }

  addEmployee(event) {
    const copy = Object.assign({}, this.employee);
    this.employeeService.addEmployee(copy);
}
    
  
}
