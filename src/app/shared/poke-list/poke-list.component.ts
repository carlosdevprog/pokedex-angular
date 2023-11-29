import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss'],
})
export class PokeListComponent implements OnInit {
  public getAllPokemons: any;
  private setAllPokemons: any;
  public apiError: boolean = false;

  constructor(private pokeApiService: PokeApiService) {}

  ngOnInit(): void {
    this.pokeApiService.apiListPokemon().subscribe({
      next: (response) => {
        this.setAllPokemons = response.results;
        this.getAllPokemons = this.setAllPokemons;
      },
      error: (error) => {
        this.apiError = true;
        console.error(error);
      }
    });
  }

  public getSearch(value: string) {
    const filter = this.setAllPokemons.filter((response: any) => {
      return !response.name.indexOf(value.toLowerCase());
    });

    this.getAllPokemons = filter;
  }
}
