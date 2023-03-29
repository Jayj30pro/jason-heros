import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const fighters = [
    {id: 12, name: 'Vegeta'},
    {id: 13, name: 'Nappa'},
    {id: 14, name: 'Broly'},
    {id: 15, name: 'Bradock'},
    {id: 16, name: 'Kakarot'},
    {id: 17, name: 'Gohan'},
    {id: 18, name: 'Trunks'},
    {id: 19, name: 'Raddits'},
    {id: 20, name: 'Goten'}
    ];
    return {fighters};
  }
  genId(fighters: Hero[]): number {
    return fighters.length > 0 ? Math.max(...fighters.map(sayian => sayian.id)) + 1: 11;
  }
}
