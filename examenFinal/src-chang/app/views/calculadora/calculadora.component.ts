import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
title   = "Calculadora Básica";
number1 :number =0;
number2 :number =0;
resultado :number =0;

sumar():void{
  this.resultado=this.number1+this.number2;
}
restar():void{
  this.resultado=this.number1-this.number2;
}
}
