import { Component, OnInit, ElementRef, Output,EventEmitter,Input } from '@angular/core';
import {Employee} from '../employee.service';

//declara a variavel para que o angular a ignore
declare const $;

@Component({
  selector: 'app-employee-edit-modal',
  templateUrl: './employee-edit-modal.component.html',
  styleUrls: ['./employee-edit-modal.component.css']
})
export class EmployeeEditModalComponent implements OnInit {

  //vai criar uma variavel para exibir o nome, usando o conceito de data bildin
  @Input()
  employee: Employee;

@Output()
onSubmit: EventEmitter<Employee> = new EventEmitter<Employee>();

  constructor(private element:ElementRef) { 

  }

  ngOnInit() {
  }

  addEmployee(event) {
    const copy = Object.assign({}, this.employee);
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
