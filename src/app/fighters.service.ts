import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { CHAMPS } from './more-heros';
import { Observable, of } from 'rxjs';
import { NotesService } from './notes.service';

@Injectable({
  providedIn: 'root'
})
export class FightersService {

  constructor(private notesService: NotesService) { }

  getFighters(): Observable<Hero[]> {
    const fighter = of(CHAMPS);
    this.notesService.add('FighterService: fetched fighters')
    return fighter;
  }
}
