import { TestBed } from '@angular/core/testing';

import { PokemonCardListService } from './pokemon-card-list.service';

describe('PokemonCardListService', () => {
  let service: PokemonCardListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonCardListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
