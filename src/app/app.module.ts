import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routing";

import { GraphQLModule } from "./apollo.config";

import { PokemonItemComponent } from "./pokemon-item/pokemon-item.component";
import { PokemonListComponent } from "./pokemon-list/pokemon-list.component";
import { CreatePokemonComponent } from "./create-pokemon/create-pokemon.component";
import { HeaderComponent } from "./header/header.component";

@NgModule({
  declarations: [
    AppComponent,
    PokemonItemComponent,
    PokemonListComponent,
    CreatePokemonComponent,
    HeaderComponent
  ],
  imports: [BrowserModule, GraphQLModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
