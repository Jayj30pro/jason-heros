import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  notes: string[] = [];

  add(notes: string) {
    this.notes.push(notes);
  }

  clear() {
    this.notes = [];
  }
  
}
