import { Directive,ElementRef, Input } from '@angular/core';

//usa o decoraator para indicar
//diretiva aplica uma transformação em componente
@Directive({
  selector: '[salaryColor]'
})
export class SalaryColorDirective {


  constructor(private element: ElementRef) {
    
   }

   @Input()
  set salaryColor(salario){
    const nativeElement: HTMLElement = this.element.nativeElement;
      const salary = parseFloat(salario);
      nativeElement.style.color = salary >5000? 'green':'red';
      //this.element.nativeElement.innerHTML = this.salaryColor;
   }
}
