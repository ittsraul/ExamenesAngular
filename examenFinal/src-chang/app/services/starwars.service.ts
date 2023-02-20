import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Personaje } from '../interfaces/personaje';
import { Starships } from '../interfaces/ships';
import { Films } from '../interfaces/films';



@Injectable({
  providedIn: 'root'
})
export class StarwarsService {

  constructor(public peticion : HttpClient)  { }

  url :string ="https://swapi.dev/api/people/?search=";

  public getPeople(search :string) : Observable<Personaje> {
    return this.peticion.get<Personaje>(this.url + search);
  }

  public getFilms(film : string)  {
    return this.peticion.get<Films>(film);
  }

  public getStarships(ship : string)  {
    return this.peticion.get<Starships>(ship);
  }
}
