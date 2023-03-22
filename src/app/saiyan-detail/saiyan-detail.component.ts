import { Component, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FightersService } from '../fighters.service';

@Component({
  selector: 'app-saiyan-detail',
  templateUrl: './saiyan-detail.component.html',
  styleUrls: ['./saiyan-detail.component.css']
})
export class SaiyanDetailComponent {
  @Input() saiyan?: Hero;

  constructor (
    private route: ActivatedRoute,
    private fighterService: FightersService,
    private location: Location
  ) {}

  ngOnInit(): void{
    this.getSaiyan();
  }

  getSaiyan(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.fighterService.getSaiyan(id)
      .subscribe(saiyan => this.saiyan = saiyan);
  }

}
