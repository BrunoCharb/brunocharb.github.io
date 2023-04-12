import { Component, OnInit } from '@angular/core';
import {Ancestries} from '../../../models/ancestries';
import {AncestriesService} from '../../../services/ancestries.service';

@Component({
  selector: 'app-ancestries',
  templateUrl: './ancestries.page.html',
  styleUrls: ['./ancestries.page.scss'],
})
export class AncestriesPage implements OnInit {

  ancestryList: Ancestries[] = [];
  constructor( private ancestryService: AncestriesService) { }

  async ionViewWillEnter() {
    await this.getAllAncestries();
  }
  ngOnInit() {
  }

  public async getAllAncestries(){
    try {
      const {data, error} = await this.ancestryService.getAllAncestries();
      if (data){
        this.ancestryList = data;
        console.log(this.ancestryList);
      }
      else {
        console.log(error.message);
      }
    }
    catch (error){
      console.log(error);
    }
  }

}
