import { Component, Output, Input, EventEmitter } from '@angular/core';
import { PhotosContent } from 'src/app/interfaces/photos-content';
import { Ricky } from 'src/app/interfaces/ricky';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
public primerGrupoImagenes : PhotosContent = {
  image: ["https://i.blogs.es/2cc78a/ordenstarwars/840_560.jpg","https://www.lavanguardia.com/files/image_948_465/uploads/2020/05/04/5fa922920d3b5.png"],
  text: "Grupo Uno",
  clase: "image-container2"
}
//Funció del tipo de interfaç de photos, que utilitza les variables per a carregar el que volem (son strings)
public segundoGrupoImagenes : PhotosContent = {
  image: ["https://lumiere-a.akamaihd.net/v1/images/starwars_e58d682b.png","https://i.blogs.es/1da08b/1366_2000-9-/840_560.jpeg","https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg"],
  text: "Grupo Dos",
  clase: "image-container3" 
}

/* public tercerGrupoImagenes : Ricky = {
  image: ""
} */

//Iniciem contador
contador: number = 1;

//Gastem booleà per  a afirmar o mentir si es mes gran, per defecte no
gran = false;

//Preparem les variables en output, que accedixen a una interfaç i arrepleguen les variables en el valor.

//Tambè se podia haber instancia ací
@Output() primerGrupo = new EventEmitter<PhotosContent>;
@Output() segundoGrupo = new EventEmitter<PhotosContent>;

@Input() image : string[] = [];
@Input() text : string = "";
@Input() clase : string = "";
//Al iniciarse carregarse emiteix el seguent i li pasa les url's, el text i les clases
ngOnInit(){
  this.primerGrupo.emit(this.primerGrupoImagenes);
  this.segundoGrupo.emit(this.segundoGrupoImagenes);
}

tamanyOriginal :string = "";
Agrandar(event : MouseEvent){
  if (this.contador >=2) {
    const img : HTMLImageElement = <HTMLImageElement>event.target;
    if(!this.gran){
      this.RestarZoom(img);
      this.tamanyOriginal = img.style.width;
      img.style.width = "300px";
      this.gran = true;
    } else {
      const content : HTMLElement = img.parentElement!;
      const view1 = content.getElementsByTagName("img");
      let arrayImages :number =0;
      for (let i = 0; i < view1.length; i++) {
        if (img === view1[i]) {
          arrayImages = i + 1;
          view1[i].style.width = "240px";
          img.style.width = this.tamanyOriginal;
          this.gran = true;
        } else {
        
        }
      }
    }
  }
}


RestarZoom(img : HTMLImageElement){
 const content : HTMLElement = img.parentElement!;
 const view1 = content.getElementsByTagName("img");
  for (let i = 0; i < view1.length; i++) {
    if (img === view1[i]) {
      
    } else {
      view1[i].style.display = "none";
    }
    
  }
}

emitixInterfaç(){
  if (this.contador === 1) {
    this.primerGrupo.emit(this.primerGrupoImagenes)
  } else if(this.contador === 2){
    this.segundoGrupo.emit(this.segundoGrupoImagenes)
  }
}

}