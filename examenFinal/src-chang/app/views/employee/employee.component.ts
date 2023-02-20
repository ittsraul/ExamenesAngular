import { Component, Output } from '@angular/core';
import { Employee } from "../../employee.models";


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
title = "Listado de empleados";


empleados:Employee[]=[
  new Employee("Raul","Sales","Presidente",7500),
  new Employee("Sergio","MArtinez","Presidente",8690),
  new Employee("Tino","Calvo","Presidente",7008),
  new Employee("Natalia","Llanes","Presidente",9001)
];

agregarEmpleado(){
  let empleadonew =new Employee(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario)
  this.empleados.push(empleadonew);
}

cuadroNombre :string ="";
cuadroApellido :string = "";
cuadroCargo :string = "";
cuadroSalario :number = 0;
}
