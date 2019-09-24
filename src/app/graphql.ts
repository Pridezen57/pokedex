import { Pokemon } from "./types";

import gql from "graphql-tag";

// Query for getting all pokemons
export const ALL_POKEMONS_QUERY = gql`
  query AllPokemonsQuery {
    allPokemons {
      id
      name
    }
  }
`;

export interface AllPokemonQueryResponse {
  allPokemons: Pokemon[];
  loading: boolean;
}

// Query for creating a pokemon
export const CREATE_POKEMON_MUTATION = gql`
  mutation CreatePokemonMutation($name: String!) {
    createPokemon(name: $name) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;

export interface CreatePokemonMutationResponse {
  createPokemon: Pokemon;
  loading: boolean;
}
