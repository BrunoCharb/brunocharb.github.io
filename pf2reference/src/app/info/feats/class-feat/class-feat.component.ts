import {Component, Input, OnInit} from '@angular/core';
import {Class_feat} from '../../../models/class_feat';

@Component({
  selector: 'app-class-feat',
  templateUrl: './class-feat.component.html',
  styleUrls: ['./class-feat.component.scss'],
})
export class ClassFeatComponent implements OnInit {

  @Input() feat: Class_feat | undefined;
  constructor() { }

  ngOnInit() {}

}
