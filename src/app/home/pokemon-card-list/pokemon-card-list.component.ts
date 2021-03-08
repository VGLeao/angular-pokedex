import { Component, OnInit } from '@angular/core';
import { PokemonCardListService } from './pokemon-card-list.service';

@Component({
  selector: 'app-pokemon-card-list',
  templateUrl: './pokemon-card-list.component.html',
  styleUrls: ['./pokemon-card-list.component.css'],
})
export class PokemonCardListComponent implements OnInit {
  pokemonList: Object[] = [];

  constructor(private service: PokemonCardListService) {}

  async ngOnInit(): Promise<void> {
    const pokemonListPromises: Promise<Object>[] = [];
    for (let i = 1; i < 11; i++) {
      const pokemon = this.service.getPokemon(i);
      pokemonListPromises.push(pokemon);
			
    }
		this.pokemonList = await Promise.all(pokemonListPromises);
  }
}
