import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonCardListComponent } from './pokemon-card-list.component';

describe('PokemonCardListComponent', () => {
  let component: PokemonCardListComponent;
  let fixture: ComponentFixture<PokemonCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonCardListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
