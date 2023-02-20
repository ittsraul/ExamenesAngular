import { HttpClient } from '@angular/common/http';
import { ReturnStatement } from '@angular/compiler';
import { Chuck } from '../interfaces/chucknorries-interface';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChucknorriesApiService {

  constructor(public http: HttpClient ) { }

  public url: string = "https://api.chucknorris.io/jokes/categories";

  getChuckNorrisJoke(search: string) {
    return this.http.get<Chuck>(this.url + search);
  }
}
