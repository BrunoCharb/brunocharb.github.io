import { Component, OnInit } from '@angular/core';
import {Ancestries} from '../../../models/ancestries';
import {AncestriesService} from '../../../services/ancestries.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-ancestries',
  templateUrl: './ancestries.page.html',
  styleUrls: ['./ancestries.page.scss'],
})
export class AncestriesPage implements OnInit {
  segment = 'ancestries';

  ancestryList: Ancestries[] = [];
  heritageList: Ancestries[] = [];
  constructor( private ancestryService: AncestriesService,
               private route: ActivatedRoute) { }

  async ionViewWillEnter() {
    await this.getAllAncestries();
    await this.getAllHeritages();
    this.segment = this.initialSegment();
  }
  ngOnInit() {
  }

  initialSegment(): string{
    return <string>this.route.snapshot.paramMap.get('segment');
  }

  public async getAllAncestries(){
    try {
      const {data, error} = await this.ancestryService.getAllAncestries();
      if (data){
        this.ancestryList = data;
      }
      else {
        console.log(error.message);
      }
    }
    catch (error){
      console.log(error);
    }
  }

  public async getAllHeritages(){
    try {
      const {data, error} = await this.ancestryService.getAllHeritages();
      if (data){
        this.heritageList = data;
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
