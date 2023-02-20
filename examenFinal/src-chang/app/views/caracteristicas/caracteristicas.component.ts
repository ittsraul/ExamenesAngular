import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-caracteristicas',
  templateUrl: './caracteristicas.component.html',
  styleUrls: ['./caracteristicas.component.css']
})
export class CaracteristicasComponent {
@Output() caracteristicas = new EventEmitter<string>();

constructor(){}

ngOnInit(): void{

}

agregarCaracteristicas(value: string){
  this.caracteristicas.emit(value);
}
}
