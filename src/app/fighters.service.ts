import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { CHAMPS } from './more-heros';
import { Observable, of } from 'rxjs';
import { NotesService } from './notes.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class FightersService {

  constructor(
    private http: HttpClient,
    private notesService: NotesService) { }

      
  /** GET heroes from the server */
  getFighters(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.fighterUrl)
      .pipe(
        tap(_ => this.log('feched fighters')),
        catchError(this.handleError<Hero[]>('getFighters', []))
      );
  }

  /** GET hero by id. Will 404 if id not found */
  getFighter(id: number): Observable<Hero> {
    const url = `${this.fighterUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
        tap(_ => this.log(`feched fighter id=${id}`)),
        catchError(this.handleError<Hero>(`getFighter id=${id}`))
      );
  }

  private handleError<T>(operation = 'operation', result?:T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.note}`);
      return of(result as T);
    };
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

  updateFighter(saiyan: Hero): Observable<any> {
    return this.http.put(this.fighterUrl, saiyan, this.httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${saiyan.id}`)),
      catchError(this.handleError<any>('updateFighter'))
    );
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private log(note: string) {
    this.notesService.add(`FighterService: ${note}`);
  }

  addFighter(saiyan: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.fighterUrl, saiyan, this.httpOptions).pipe(
      tap((newFighter: Hero) => this.log(`added fighter w/ id=${newFighter.id}`)),
      catchError(this.handleError<Hero>('addFighter'))
    );
  }

  deleteFighter(id: number): Observable<Hero> {
    const url = `${this.fighterUrl}/${id}`;

    return this.http.delete<Hero>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Hero>('deleteFighter'))
    );
  }

  searchFighters(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Hero[]>(`${this.fighterUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
        this.log(`found fighters matching "${term}"`):
        this.log(`no heroes matching "${term}"`)),
      catchError(this.handleError<Hero[]>('searchFighters', []))
    );
  }

  private fighterUrl = 'api/fighters';
}

