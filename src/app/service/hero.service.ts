import { Injectable } from '@angular/core';
import { Hero } from '../model/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  list : Hero [] =

  [
    {
      id: 1,
      name: 'Felipe',
      superpower: 'clever',
      address: 'Madrid',
    },
    {
      id: 2,
      name: 'Lewis',
      superpower: 'fast',
      address: 'London',
    },
    {
      id: 3,
      name: 'Sergei',
      superpower: 'strong',
      address: 'Moscow',
    },
    {
      id: 4,
      name: 'Hirosi',
      superpower: 'rich',
      address: 'Tokio',
    },
    {
      id: 5,
      name: 'Julietta',
      superpower: 'pretty',
      address: 'Roma',
    }

  ];

  constructor() { }
}
