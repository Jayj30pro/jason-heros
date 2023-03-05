import { Component, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-saiyan-detail',
  templateUrl: './saiyan-detail.component.html',
  styleUrls: ['./saiyan-detail.component.css']
})
export class SaiyanDetailComponent {
  @Input() saiyan?: Hero;

}
