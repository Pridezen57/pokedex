import { Component, OnInit } from "@angular/core";
import { Pokemon } from "../types";
import { Apollo } from "apollo-angular";

import { ALL_POKEMONS_QUERY, AllPokemonQueryResponse } from "../graphql";

@Component({
  selector: "app-pokemon-list",
  templateUrl: "./pokemon-list.component.html",
  styleUrls: ["./pokemon-list.component.css"]
})
export class PokemonListComponent implements OnInit {
  allPokemons: Pokemon[] = [];
  loading: boolean = true;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.apollo
      .watchQuery({
        query: ALL_POKEMONS_QUERY
      })
      .valueChanges.subscribe(response => {
        // 5
        this.allPokemons = response.data.allPokemons;
        this.loading = response.data.loading;
      });
  }
}
