import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-starw',
  templateUrl: './form-starw.component.html',
  styleUrls: ['./form-starw.component.css']
})
export class FormStarwComponent {
name :string ="";
mostrarForm :boolean =true;
@Output() addPersonaje = new EventEmitter;

EnviarPersonajes(){
  this.mostrarForm = false;
  this.addPersonaje.emit(this.name);
}
}
