import { Pokemon } from "./types";
// 1
import gql from "graphql-tag";

// 2
export const ALL_POKEMONS_QUERY = gql`
  query AllPokemonsQuery {
    allPokemons {
      id
      name
    }
  }
`;

// 3
export interface AllPokemonQueryResponse {
  allPokemons: Pokemon[];
  loading: boolean;
}
