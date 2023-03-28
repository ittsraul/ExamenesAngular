import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ricky } from '../interfaces/ricky';
/* import { Morty } from '../interfaces/morty"; */

@Injectable({
  providedIn: 'root'
})
export class RickMortyService {
  public urlCharacter: string = 'https://rickandmortyapi.com/api/character/';

  constructor(public http: HttpClient) { }
  

  getCharacter(name: string):Observable<any>{
      return this.http.get<Ricky>(this.urlCharacter + `${name}`);
  }
}
