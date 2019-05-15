import { Component, OnInit, ElementRef, Output,EventEmitter } from '@angular/core';
import {Employee, EmployeeService} from '../employee.service';


//declara a variavel para que o angular a ignore 
declare const $;

@Component({
  selector: 'app-employee-new-modal',
  templateUrl: './employee-new-modal.component.html',
  styleUrls: ['./employee-new-modal.component.css']
})
export class EmployeeNewModalComponent implements OnInit {

  //vai criar uma variavel para armazenar o nome, usando o conceito de data bildin
  employee: Employee = {
    name: '',
    salario: 0,
    bonus: 0,
};
//emissor de evento, onde pode se passar o tipo ou não, caso n queira usar o any
//permite que outra classe use essa ação de saída
@Output()
onSubmit: EventEmitter<Employee> = new EventEmitter<Employee>();

  constructor(private element:ElementRef, private employeeService: EmployeeService) { 

  }

  ngOnInit() {
  }

  addEmployee(event) {
    const copy = Object.assign({}, this.employee);
    this.employeeService.addEmployee(copy);
    this.onSubmit.emit(copy);
    this.hide();
}

hide(){
  const divModal = this.getDivModal();
  $(divModal).modal('hide');
}

//criando o metodo para chanar o modal
show(){
    const divModal = this.getDivModal();
    $(divModal).modal('show');
  }

  
  //criando um metodo privado
  private getDivModal(): HTMLElement {
    const nativeElement: HTMLElement = this.element.nativeElement;
    return nativeElement.firstChild.firstChild as HTMLElement;
}

  
}

