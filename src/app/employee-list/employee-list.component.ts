import { Component, OnInit, ViewChild } from '@angular/core';
import employees from '../employees';
import {EmployeeService, Employee} from '../employee.service';
import { EmployeeNewModalComponent } from '../employee-new-modal/employee-new-modal.component';
import { EmployeeEditModalComponent } from '../employee-edit-modal/employee-edit-modal.component';
import { EmployeeDeleteModalComponent } from '../employee-delete-modal/employee-delete-modal.component';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})

export class EmployeeListComponent implements OnInit {

  employee:Employee;

  //habilita a edição
  employeeToEdit: Employee;

 //mostra a msg ao cadastrar
 showMessageSuccess = false;

 //recebe o funcionario que será excluido
 employeetoDelete:Employee;

 data = new Date();

  @ViewChild(EmployeeNewModalComponent) //pegar uma referencia de um elemento
    employeeNewModal: EmployeeNewModalComponent;

  @ViewChild(EmployeeEditModalComponent) //pegar uma referencia de um elemento
    employeeEditModal: EmployeeNewModalComponent;

    @ViewChild(EmployeeDeleteModalComponent) //pegar uma referencia de um elemento
    employeeDeleteModal: EmployeeNewModalComponent;
    
  constructor(public employeeService: EmployeeService) {
    
   }

  ngOnInit() {
  }

  //criando um metodo para trocar a cor do salsario
  // getSalarioCor(employee){
  //   return employee.salario >2000? 'green':null;
  // }

  opemNewModal() {
    this.employeeNewModal.show();
}

openEditModal(employee: Employee) {
  this.employeeToEdit = employee;
  this.employeeEditModal.show();
}

openDestroyModal(employee: Employee) {
  this.employeetoDelete = employee;
  this.employeeDeleteModal.show();
}

onNewEmployee(employee: Employee){
  this.employee = employee;
  this.showMessageSuccess = true;
  }

onEditEmployee(employee: Employee){
  console.log(employee);
  }

onDestoyEmployee(employee: Employee){
  console.log(employee);
}
}
