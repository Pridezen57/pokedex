import {Component, OnInit} from '@angular/core';
import {Pokemon} from '../types';

@Component({
  selector: 'pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemonToRender: Pokemon[] = [{
    id: '1',
    name: 'Bulbasaur',
    createdAt: '2018-02-08T16:54:37.000Z',
    updatedAt: '2018-02-08T16:54:37.000Z'
  },{
    id: '2',
    name: 'Charmander',
    createdAt: '2018-02-08T16:54:37.000Z',
    updatedAt: '2018-02-08T16:54:37.000Z'
  }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
