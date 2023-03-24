import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { CHAMPS } from './more-heros';
import { Observable, of } from 'rxjs';
import { NotesService } from './notes.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FightersService {

  constructor(
    private http: HttpClient,
    private notesService: NotesService) { }

  getFighters(): Observable<Hero[]> {
    //const fighter = of(CHAMPS);
    //this.notesService.add('FighterService: fetched all fighters')
    //return fighter;
    return this.http.get<Hero[]>(this.fighterUrl)
  }

  getTopFighters(){
    const fighter = of(CHAMPS);
    this.notesService.add('FighterService: fetched the top fighters')
    return fighter;
  }

  getSaiyan(id: number): Observable<Hero> {
    //error handler will go here
    const saiyan = CHAMPS.find(h => h.id === id)!;
    this.notesService.add(`FighterService: fteched hero id=${id}`);
    return of(saiyan);
  }

  private log(note: string) {
    this.notesService.add(`FighterService: ${note}`);
  }

  private fighterUrl = 'api/fighters';
}
