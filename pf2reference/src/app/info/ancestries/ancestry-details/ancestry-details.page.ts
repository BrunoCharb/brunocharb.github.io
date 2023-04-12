import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AncestriesService} from '../../../services/ancestries.service';
import {Ancestries} from '../../../models/ancestries';

@Component({
  selector: 'app-ancestry-details',
  templateUrl: './ancestry-details.page.html',
  styleUrls: ['./ancestry-details.page.scss'],
})
export class AncestryDetailsPage implements OnInit {
  current_ancestry: Ancestries | undefined;
  segment: string = 'details';

  constructor(private route: ActivatedRoute,
              private ancestryService: AncestriesService) { }

  async ionViewWillEnter(){
    await this.getAncestry()
    console.log(this.current_ancestry);
  }

  ngOnInit() {
  }

  idAncestry(): string{
    return <string>this.route.snapshot.paramMap.get('id');
  }

  public async getAncestry(){
    try{
      const {data: ancestry, error} = await this.ancestryService.getAncestryByID(this.idAncestry());
      if(ancestry){
        this.current_ancestry = ancestry;
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
