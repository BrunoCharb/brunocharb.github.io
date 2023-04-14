import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    {title: 'Ancestries', url:'/ancestries/ancestries'},
    {title: 'Classes', url: '/classes'}
  ];
  constructor() {}
}
