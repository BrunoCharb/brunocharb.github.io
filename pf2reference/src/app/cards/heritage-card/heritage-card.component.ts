import {Component, Input, OnInit} from '@angular/core';
import {Ancestries} from '../../models/ancestries';

@Component({
  selector: 'app-heritage-card',
  templateUrl: './heritage-card.component.html',
  styleUrls: ['./heritage-card.component.scss'],
})
export class HeritageCardComponent implements OnInit {
  @Input() heritage: Ancestries | undefined;

  constructor() { }

  ngOnInit() {}

}
