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

}


