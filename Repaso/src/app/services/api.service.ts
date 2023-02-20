import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

import { CharacterResponse } from '../interfaces/character-response';
import { FilmResponse } from '../interfaces/film-response';
import { StarShipResponse } from '../interfaces/star-ship-response';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http : HttpClient) { }

  url : string = "https://swapi.dev/api/people/?search="
  public getResponse(search : string) : Observable<CharacterResponse> {
    return this.http.get<CharacterResponse>(this.url + search)
  }

  public getFilmResponse(urlFilm : string) : Observable<FilmResponse> {
    return this.http.get<FilmResponse>(urlFilm)
  }

  public getStarShipResponse(urlStarShip : string) : Observable<StarShipResponse> {
    return this.http.get<StarShipResponse>(urlStarShip)
  }
}
