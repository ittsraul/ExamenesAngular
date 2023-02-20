import { Component, Output, EventEmitter } from '@angular/core';
import { FilmResponse } from 'src/app/interfaces/film-response';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-view-two',
  templateUrl: './view-two.component.html',
  styleUrls: ['./view-two.component.css']
})
export class ViewTwoComponent {

  
  peliculasSaga : string[] = [];
  infoPeliculas : FilmResponse[] = [];
  starShips : string[] = [];

  constructor(public service : ApiService) {}
  nombreEmitted(nombre : string)
  {
    this.service.getResponse(nombre).subscribe(response => {

      this.peliculasSaga = response.results[0].films
      this.peliculasSaga.forEach(query => {

        this.service.getFilmResponse(query).subscribe(response =>{
          this.infoPeliculas.push(response);
          this.infoPeliculas.forEach(responseFilm => {

            let starship = responseFilm.starships[0]
            this.service.getStarShipResponse(starship).subscribe(responseShip =>{
              
              responseFilm.starships[0] = responseShip.name;
            });
          })
        });
      });
    })

  }

}
