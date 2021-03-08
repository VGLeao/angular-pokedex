import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PokemonCardListService {
  constructor(private http: HttpClient) {}

  getPokemon(id: number) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`).toPromise();
  }
}
