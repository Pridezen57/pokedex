import { Component, OnInit } from "@angular/core";

import { Apollo } from "apollo-angular";
import {
  CREATE_POKEMON_MUTATION,
  CreatePokemonMutationResponse
} from "../graphql";

@Component({
  selector: "app-create-pokemon",
  templateUrl: "./create-pokemon.component.html",
  styleUrls: ["./create-pokemon.component.css"]
})
export class CreatePokemonComponent implements OnInit {
  name: string = "";

  constructor(private apollo: Apollo) {}

  ngOnInit() {}

  createPokemon() {
    this.apollo
      .mutate({
        mutation: CREATE_POKEMON_MUTATION,
        variables: {
          name: this.name
        }
      })
      .subscribe(response => {});
  }
}
