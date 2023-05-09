import { Component, OnInit, Input } from '@angular/core';
import { Backgrounds } from 'src/app/models/backgrounds';

@Component({
  selector: 'app-bg-display',
  templateUrl: './bg-display.component.html',
  styleUrls: ['./bg-display.component.scss'],
})
export class BgDisplayComponent implements OnInit {
  @Input() background: Backgrounds | undefined;
  constructor() { }

  ngOnInit() {}

}
