import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chuknorries-form',
  templateUrl: './chuknorries-form.component.html',
  styleUrls: ['./chuknorries-form.component.css']
})
export class ChuknorriesFormComponent {
name :string ="";
chuck :boolean = true;

@Output() addChuck = new EventEmitter();

EnviarChuck(){
  this.chuck=false;
  this.addChuck.emit(this.name);
}
}
