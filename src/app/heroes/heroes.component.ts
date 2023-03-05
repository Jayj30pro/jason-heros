import { Component } from '@angular/core';
import { Hero } from '../hero';
import { FightersService } from '../fighters.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  jheroes: Hero[] = [];
  constructor(private fighterService: FightersService) {}
  selectedHero?: Hero;

  getFighters(): void {
    this.fighterService.getFighters()
      .subscribe(jheroes => this.jheroes = jheroes);
  }

  ngOnInit(): void {
    this.getFighters();
  }

  onSelect(sayian: Hero): void {
    this.selectedHero = sayian;
  }
}

