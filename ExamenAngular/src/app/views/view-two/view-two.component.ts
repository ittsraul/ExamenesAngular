import { Component } from '@angular/core';
import { Ricky } from 'src/app/interfaces/ricky';

@Component({
  selector: 'app-view-two',
  templateUrl: './view-two.component.html',
  styleUrls: ['./view-two.component.css']
})
export class ViewTwoComponent {
img : string[] = [];
name: string ="";
constructor(public Rickym : Ricky){}

BuscaPersonaje(service : string ){
  this.Rickym.getPersonaje(service).subscribe( response =>{
    this.name = response.results.name;
    this.name.forEach(consulta =>{
      this.Rickym.getImagenes(consulta).subscribe(response =>{
        this.img = response.results.img;
        
      });
    });
  });
}
}
