import {Component, Input, OnInit} from '@angular/core';
import {Character_classes} from '../../models/character_classes';

@Component({
  selector: 'app-class-card',
  templateUrl: './class-card.component.html',
  styleUrls: ['./class-card.component.scss'],
})
export class ClassCardComponent implements OnInit {
  @Input() classe: Character_classes | undefined;
  constructor() { }

  ngOnInit() {}

}
