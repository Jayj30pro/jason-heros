import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { FightersService } from '../fighters.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  
  jheroes: Hero[] = [];

  constructor(private fighterService: FightersService) {}

  ngOnInit(): void {
    this.getFighters();
  }

  getFighters(): void {
    this.fighterService.getFighters()
      .subscribe(jheroes => this.jheroes = jheroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.fighterService.addFighter({ name } as Hero)
      .subscribe(sayian => {
        this.jheroes.push(sayian);
      });
  }

  delete(fighter: Hero): void {
    this.jheroes = this.jheroes.filter(h => h !== fighter);
    this.fighterService.deleteFighter(fighter.id).subscribe();
  }

}

// Section 6 Search by Name
