import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AncestriesService} from '../../../services/ancestries.service';
import {Ancestries} from '../../../models/ancestries';

@Component({
  selector: 'app-heritage-details',
  templateUrl: './heritage-details.page.html',
  styleUrls: ['./heritage-details.page.scss'],
})
export class HeritageDetailsPage implements OnInit {
  currentHeritage: Ancestries | undefined;

  constructor(private route: ActivatedRoute,
              private ancestryService: AncestriesService) { }

  async ionViewWillEnter(){
    await this.getHeritage();
  }

  ngOnInit() {
  }

  idHeritage(): string{
    return <string>this.route.snapshot.paramMap.get('id');
  }

  public async getHeritage(){
    try{
      const {data: ancestry, error} = await this.ancestryService.getAncestryByID(this.idHeritage());
      if(ancestry){
        this.currentHeritage = ancestry;
      }
      else if (error){
        console.log(error.message);
      }
    }
    catch (error){
      console.log(error);
    }
  }

}
