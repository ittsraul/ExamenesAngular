import { Component, Input } from '@angular/core';
import { Employee } from 'src/app/employee.models';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent {
@Input() listEmployee:Employee;
@Input() index:number;

constructor(){
  
}
ngOnInit(): void{
 
}

arrayCaracteristicas = [''];

agregarCaracteristicas(nuevaCaracteristica: string) {
  this.arrayCaracteristicas.push(nuevaCaracteristica);
}

}
