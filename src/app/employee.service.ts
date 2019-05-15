import { Injectable } from '@angular/core';

export interface Employee{
  name: string;
  salario: number;
  bonus: number;
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  //criando as variaveis, o const vai otimizar
  employees: Employee[] = [];
  constructor() { }
  
  addEmployee(employee: Employee) {
    employee.bonus = employee.salario >= 1000 ? 0 : employee.bonus;
    this.employees.push(employee);
}
destroyEmployee(employee: Employee){
  const index = this.employees.indexOf(employee);
  //usase o splice para apagar e o numero 1 para caracterizar que somente ele será apagado
  this.employees.splice(index,1)
}
}

//faz a exportação para que todos possam usar
//export default employees;
