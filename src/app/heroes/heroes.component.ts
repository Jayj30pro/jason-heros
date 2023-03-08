import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { FightersService } from '../fighters.service';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  selectedHero?: Hero;
  jheroes: Hero[] = [];

  constructor(private fighterService: FightersService, private notesService: NotesService) {}

  ngOnInit(): void {
    this.getFighters();
  }

  onSelect(sayian: Hero): void {
    this.selectedHero = sayian;
    this.notesService.add(`FightersComponent: Selected sayian id=${sayian.id}`);
  }

  getFighters(): void {
    this.fighterService.getFighters()
      .subscribe(jheroes => this.jheroes = jheroes);
  }

}

// section 5 test in intelliJ
