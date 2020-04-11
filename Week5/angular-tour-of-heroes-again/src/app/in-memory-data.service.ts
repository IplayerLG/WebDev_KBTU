import { InMemoryDbService } from 'angular-in-memory-web-api'
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Altyn' },
      { id: 2, name: 'Aruzh' },
      { id: 3, name: 'LoL' },
      { id: 4, name: 'KeK' },
      { id: 5, name: 'Cheburek' },
      { id: 6, name: 'Ambidrol' }
    ]
    return heroes;
  }
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
  constructor() { }
}
