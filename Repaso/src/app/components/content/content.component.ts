import { Component, Input, Output, EventEmitter } from '@angular/core';
import { GruposContent } from 'src/app/interfaces/grupos-content';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

public uno : GruposContent = {
    image: ["https://i.blogs.es/2cc78a/ordenstarwars/840_560.jpg"],
    groupText: "Grupo Uno",
    clase: "image-container"
    
}

public dos : GruposContent = {
  image: ["https://lumiere-a.akamaihd.net/v1/images/starwars_e58d682b.png", "https://i.blogs.es/1da08b/1366_2000-9-/840_560.jpeg"],
  groupText: "Grupo Dos",
  clase: "image-container3"
  
}

public tres : GruposContent = {
  image: ["https://lumiere-a.akamaihd.net/v1/images/starwars_e58d682b.png", "https://www.lavanguardia.com/files/image_948_465/uploads/2020/05/04/5fa922920d3b5.png", "https://i.blogs.es/1da08b/1366_2000-9-/840_560.jpeg"],
  groupText: "Grupo Tres",
  clase: "image-container2"
}

@Output() interfazUno = new EventEmitter<GruposContent>;
@Output() interfazDos = new EventEmitter<GruposContent>;
@Output() interfazTres = new EventEmitter<GruposContent>;

@Input() imagenes : string[] = [""]
@Input() text : string = "";
@Input() clase : string = "";
public imgSet : number = 1;

ngOnInit()
{
  this.interfazUno.emit(this.uno)
}

isBig = false;
originWidth : string = "";

  makeBig(event : MouseEvent)
  {
    if (this.imgSet >= 2) {
    
      const img : HTMLImageElement = <HTMLImageElement>event.target;
      if (!this.isBig) {

        this.ocultarImgs(img);
        this.originWidth = img.style.width;
        img.style.width = "300px";
        this.isBig = true;
      }else{
        const parent : HTMLElement = img.parentElement!;
        const children = parent.getElementsByTagName("img");
        let numImg : Number = 0;
        for (let i = 0; i < children.length; i++) {
          if (img === children[i]) {
            numImg = i + 1;
            children[i].style.width= this.originWidth;
          }
          children[i].style.display = "inline-block";
        }
        this.isBig = false;
      }
    }
  }

  ocultarImgs(img : HTMLImageElement)
  {
    const parent : HTMLElement = img.parentElement!;
    const children = parent.getElementsByTagName("img");
 
    for (let i = 0; i < children.length; i++) {
      if (img === children[i]) {
        
      }else{children[i].style.display = "none";}
      
    }
  }

  Anterior()
  {
    if (this.imgSet > 1 && !this.isBig){
      this.imgSet--;
    }else if (this.imgSet === 1 && !this.isBig){
      this.imgSet = 3;
    }
    this.emitInterfaces()
  }

  Siguiente()
  {
    if (this.imgSet < 3 && !this.isBig){
      this.imgSet++;
    }else if(this.imgSet === 3 && !this.isBig){
      this.imgSet = 1
    }

    this.emitInterfaces()
  }

  emitInterfaces()
  {
    if (this.imgSet === 1) {
      this.interfazUno.emit(this.uno)
    }else if (this.imgSet === 2) {
      this.interfazDos.emit(this.dos)
    }else if(this.imgSet === 3) {
      this.interfazTres.emit(this.tres)
    }
  }
}
