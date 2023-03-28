import { Component } from '@angular/core';
import { PhotosContent } from 'src/app/interfaces/photos-content';

@Component({
  selector: 'app-view-one',
  templateUrl: './view-one.component.html',
  styleUrls: ['./view-one.component.css']
})
export class ViewOneComponent {
public image : string[] =[""];
public text :string ="";
public clase : string = "";


AgafaPrimerGrup(primer : PhotosContent){
  this.image = primer.image;
  this.text = primer.text;
  this.clase = primer.clase;
}
AgafaSegonGrup(segon : PhotosContent){
  this.image = segon.image;
  this.text = segon.text;
  this.clase = segon.clase;
}
}
