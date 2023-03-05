import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { CHAMPS } from './more-heros';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FightersService {

  constructor() { }
  getFighters(): Observable<Hero[]> {
    const fighter = of(CHAMPS);
    return fighter;
  }
}
