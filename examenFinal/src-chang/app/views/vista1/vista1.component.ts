import { Component, Input } from '@angular/core';
import { GruposContent } from 'src/app/interfaces/grupos-content';

@Component({
  selector: 'app-vista1',
  templateUrl: './vista1.component.html',
  styleUrls: ['./vista1.component.css']
})
export class Vista1Component {
public image : string[] = [""];
public text : string = "";
public clase : string = "";

getInterfaz(primero : GruposContent)
{
  this.image = primero.image;
  this.text = primero.groupText;
  this.clase = primero.clase;
}

getInterfaz2(segundo : GruposContent)
{
  this.image = segundo.image;
  this.text = segundo.groupText;
  this.clase = segundo.clase;
}

getInterfaz3(tercero : GruposContent)
{
  this.image = tercero.image;
  this.text = tercero.groupText;
  this.clase = tercero.clase;
}

}
