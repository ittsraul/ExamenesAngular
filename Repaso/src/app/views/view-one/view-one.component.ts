import { Component, Input } from '@angular/core';
import { GruposContent } from 'src/app/interfaces/grupos-content';

@Component({
  selector: 'app-view-one',
  templateUrl: './view-one.component.html',
  styleUrls: ['./view-one.component.css']
})
export class ViewOneComponent {

public imagenes : string[] = [""]
public text : string = "";
public clase : string = "";

  getInterfazUno(uno : GruposContent)
  {
    this.imagenes = uno.image;
    this.text = uno.groupText;
    this.clase = uno.clase;
  }

  getInterfazDos(dos : GruposContent)
  {
    this.imagenes = dos.image;
    this.text = dos.groupText;
    this.clase = dos.clase;
  }

  getInterfazTres(tres : GruposContent)
  {
    this.imagenes = tres.image;
    this.text = tres.groupText;
    this.clase = tres.clase;
  }


}
