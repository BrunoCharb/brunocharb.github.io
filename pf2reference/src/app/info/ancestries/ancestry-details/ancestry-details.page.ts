import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AncestriesService} from '../../../services/ancestries.service';
import {Ancestries} from '../../../models/ancestries';
import {Class_feat} from "../../../models/class_feat";
import {FeatsService} from "../../../services/feats.service";

@Component({
  selector: 'app-ancestry-details',
  templateUrl: './ancestry-details.page.html',
  styleUrls: ['./ancestry-details.page.scss'],
})
export class AncestryDetailsPage implements OnInit {
  current_ancestry: Ancestries | undefined;
  segment: string = 'details';
  feat_level = 0;
  ancestry_feats: Class_feat[]  = [];
  complete_ancestry_feats: Class_feat[] = [];
  level_filtered_feats: Class_feat[] = [];
  search_term = ''

  constructor(private route: ActivatedRoute,
              private ancestryService: AncestriesService,
              private featsService: FeatsService) { }

  async ionViewWillEnter(){
    await this.getAncestry();
    await this.getFeats();
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

  filterArray(event: any) {
    //Assigne la valeur à ce qui est indiqué dans l'event.
    this.search_term = event.target.value;

    //Si la valeur n'est pas vide (possibilité de la trim ou bien juste this.val)
    if (this.search_term.trim() !== '') {
      this.ancestry_feats = this.level_filtered_feats.filter(feat =>
        feat.name.toLowerCase().includes(this.search_term.toLowerCase())
      );
    }
    else{
      this.ancestry_feats = this.level_filtered_feats;
    }
  }

  filterByLevel(){
    if(this.feat_level === 0){
      this.level_filtered_feats = this.complete_ancestry_feats;
      this.ancestry_feats = this.level_filtered_feats;
    }
    else{
      this.level_filtered_feats = this.complete_ancestry_feats.filter(feat => feat.level === this.feat_level);
      this.ancestry_feats = this.level_filtered_feats;
    }
  }

  public async getFeats(){
    try {
      const {data: feats, error} = await this.featsService.getFeatsWithTraits(this.current_ancestry?.name);
      if(feats){
        this.ancestry_feats = feats;
        this.complete_ancestry_feats = feats;
        this.level_filtered_feats = feats;
        console.log(feats);
      }
      else if(error){
        console.log(error);
      }
    }
    catch (error){
      console.log(error);
    }
  }
}
