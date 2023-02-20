import { Component, Output, EventEmitter } from '@angular/core';
import { Films } from 'src/app/interfaces/films';
import { StarwarsService } from 'src/app/services/starwars.service';

@Component({
  selector: 'app-starwars',
  templateUrl: './starwars.component.html',
  styleUrls: ['./starwars.component.css']
})
export class StarwarsComponent {
  films :string[] = [];
  roles :Films[] = [];
  starShips :string[] = [];

  constructor(public Starwars : StarwarsService){}
  EncontrarPersonaje( service: string){
    this.Starwars.getPeople(service).subscribe(response =>{
      this.films = response.results[0].films;
      this.films.forEach(consulta => {

        this.Starwars.getFilms(consulta).subscribe(response => {
          this.roles.push(response);
          this.roles.forEach(responseRoles =>  {

            let starShip = responseRoles.starships[0]
            this.Starwars.getStarships(starShip).subscribe(responseStarShips =>{

              responseRoles.starships[0] = responseStarShips.name;

            });
          });
        });
      });
    });
  }
  

}
