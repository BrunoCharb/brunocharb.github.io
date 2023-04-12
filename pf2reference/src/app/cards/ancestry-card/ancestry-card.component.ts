import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Ancestries} from '../../models/ancestries';

@Component({
  selector: 'app-ancestry-card',
  templateUrl: './ancestry-card.component.html',
  styleUrls: ['./ancestry-card.component.scss'],
})
export class AncestryCardComponent implements OnInit {
  @Input() ancestry: Ancestries | undefined;
  constructor(public router: Router) { }

  ngOnInit() {}

}
