import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { FightersService } from '../fighters.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  jheroes: Hero[] = [];

  constructor(private fighterService: FightersService) {}

  ngOnInit(): void {
    this.getFighters();
  }

  getFighters(): void {
    this.fighterService.getTopFighters()
    .subscribe(jheroes => this.jheroes = jheroes.slice(1, 5)); 
  }
}
