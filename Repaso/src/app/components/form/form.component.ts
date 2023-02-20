import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  nombre : string = "";
  showForm : boolean = true;
@Output() nombreEmit = new EventEmitter;


  onSubmit()
  {
    this.showForm = false;
    this.nombreEmit.emit(this.nombre);
  }
}
