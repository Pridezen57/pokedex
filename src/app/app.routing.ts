import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PokemonListComponent } from "./pokemon-list/pokemon-list.component";
import { CreatePokemonComponent } from "./create-pokemon/create-pokemon.component";

/**
 * Setup all routes here
 */
const routes: Routes = [
  {
    path: "",
    component: PokemonListComponent,
    pathMatch: "full"
  },
  {
    path: "create",
    component: CreatePokemonComponent,
    pathMatch: "full"
  },
  {
    path: "**",
    redirectTo: ""
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
