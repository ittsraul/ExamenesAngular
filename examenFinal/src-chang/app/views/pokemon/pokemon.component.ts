import { Component } from '@angular/core';
import { PokedexService } from 'src/app/services/pokedex.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent {
title: string = "PokeDex";
name: string ;
urlImage : string;
constructor(private pokeservice : PokedexService) { }

ngOnInit() : void {
 
}

search()  {
  this.pokeservice.getPokemon(this.name).subscribe((data:any) => {
    this.urlImage = data.sprites.front_default;
  });  
}

}