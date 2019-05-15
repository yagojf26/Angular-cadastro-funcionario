import { Component, OnInit,Input, ElementRef, Output, EventEmitter } from '@angular/core';
import { Employee, EmployeeService } from '../employee.service';

declare const $;
@Component({
  selector: 'app-employee-delete-modal',
  templateUrl: './employee-delete-modal.component.html',
  styleUrls: ['./employee-delete-modal.component.css']
})
export class EmployeeDeleteModalComponent implements OnInit {

  //chama o empregadoo

  @Input()
  employee:Employee;

  @Output()
  onDestroy: EventEmitter<Employee> = new EventEmitter<Employee>();


  
  constructor(private element: ElementRef, private employeeService: EmployeeService) { }

  ngOnInit() {
  }

  destroy(){
    const copy = Object.assign({}, this.employee);
    this.employeeService.destroyEmployee(this.employee);
    this.onDestroy.emit(copy);
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
      return nativeElement.firstChild as HTMLElement;
  }
}
