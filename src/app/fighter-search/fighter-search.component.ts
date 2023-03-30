import { Component, OnInit } from '@angular/core';
import { from, Observable, Subject} from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Hero } from '../hero';
import { FightersService } from '../fighters.service';

@Component({
  selector: 'app-fighter-search',
  templateUrl: './fighter-search.component.html',
  styleUrls: ['./fighter-search.component.css']
})
export class FighterSearchComponent implements OnInit {
  fighters$!: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  constructor(private fighterService: FightersService) {}

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
      this.fighters$ = this.searchTerms.pipe(
        // wait 300ms after each keystroke before considering the term
        debounceTime(300),

        // ignore new term if same as previous term
        distinctUntilChanged(),

        // switch to new search observable each time the term changes
        switchMap((term: string) => this.fighterService.searchFighters(term)),

      );
  }

}

// all but the CSS
// fix the get top fighter method