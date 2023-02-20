import { Component } from '@angular/core';
import { StarwarsService } from 'src/app/services/starwars.service';
import { Films } from 'src/app/interfaces/films';
import { Starships } from 'src/app/interfaces/ships';
import { Personaje } from 'src/app/interfaces/personaje';

@Component({
  selector: 'app-vista2',
  templateUrl: './vista2.component.html',
  styleUrls: ['./vista2.component.css']
})
export class Vista2Component {

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

