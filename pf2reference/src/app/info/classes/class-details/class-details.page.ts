import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Character_classes} from '../../../models/character_classes';
import {Progress_table} from '../../../models/progress_table';
import {ClassServiceService} from '../../../services/class-service.service';
import {Subclass} from '../../../models/subclass';
import {Class_feat} from '../../../models/class_feat';
import {FeatsService} from "../../../services/feats.service";

@Component({
  selector: 'app-class-details',
  templateUrl: './class-details.page.html',
  styleUrls: ['./class-details.page.scss'],
})
export class ClassDetailsPage implements OnInit {
  segment: string = 'details';

  current_class: Character_classes | undefined;
  progression: Progress_table[] = [];
  subclasses: Subclass[] = [];
  subclass: number = 0;
  eidolon: string = 'none';
  class_feats: Class_feat[]  = [];
  complete_class_feats: Class_feat[] = [];
  level_filtered_feats: Class_feat[] = [];
  search_term = ''
  feat_level = 0;
  constructor(private route: ActivatedRoute,
              private classService: ClassServiceService,
              private featsService: FeatsService) { }

  async ionViewWillEnter(){
    await this.getClass();
    await this.getProgression();
    await this.getSubclasses();
    await this.getFeats();
  }
  async ngOnInit() {

  }

  idClass(): string{
    return <string>this.route.snapshot.paramMap.get('id');
  }
  public async getClass(){
    try{
      const {data: character_class, error} = await this.classService.getClass(this.idClass());
      if(character_class){
        this.current_class = character_class;
      }
      else if (error){
        console.log(error.message);
      }
    }
    catch (error){
      console.log(error);
    }
  }

  public async getProgression(){
    try{
      const {data: progression, error} = await this.classService.getClassProgression(this.idClass());
      if(progression){
        this.progression = progression;
      }
      else if(error){
        console.log(error)
      }
    }
    catch (error){
      console.log(error);
    }
  }

  public async getSubclasses(){
    try{
      const {data: subclasses, error} = await this.classService.getSubclasses(this.idClass());
      if(subclasses){
        this.subclasses = subclasses;
        console.log(subclasses);
      }
      else if(error){
        console.log(error);
      }
    }
    catch (error){
      console.log(error);
    }
  }

  public async getFeats(){
    try {
      const {data: feats, error} = await this.featsService.getFeatsWithTraits(this.current_class?.name);
      if(feats){
        this.class_feats = feats;
        this.complete_class_feats = feats;
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

  filterArray(event: any) {
    //Assigne la valeur à ce qui est indiqué dans l'event.
    this.search_term = event.target.value;

    //Si la valeur n'est pas vide (possibilité de la trim ou bien juste this.val)
    if (this.search_term.trim() !== '') {
      this.class_feats = this.level_filtered_feats.filter(feat =>
        feat.name.toLowerCase().includes(this.search_term.toLowerCase())
        || this.chetkTraits(feat, this.search_term.toLowerCase())
      );
    }
    else{
      this.class_feats = this.level_filtered_feats;
    }
  }

  filterByLevel(){
    if(this.feat_level === 0){
      this.level_filtered_feats = this.complete_class_feats;
      this.class_feats = this.level_filtered_feats;
    }
    else{
      this.level_filtered_feats = this.complete_class_feats.filter(feat => feat.level === this.feat_level);
      this.class_feats = this.level_filtered_feats;
    }
  }

  chetkTraits(feat: Class_feat, fragment: string): boolean{    
    for (const trait of feat.traits){
      if(trait.toLowerCase().includes(fragment)){
        return true;
      }
    }
    return false;
  }
}
