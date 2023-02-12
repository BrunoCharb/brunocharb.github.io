import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Character_classes} from '../../../models/character_classes';
import {Progress_table} from '../../../models/progress_table';
import {ClassServiceService} from '../../../services/class-service.service';

@Component({
  selector: 'app-class-details',
  templateUrl: './class-details.page.html',
  styleUrls: ['./class-details.page.scss'],
})
export class ClassDetailsPage implements OnInit {

  current_class: Character_classes | undefined;
  progression: Progress_table[] = [];
  constructor(private route: ActivatedRoute,
              private classService: ClassServiceService) { }

  async ionViewWillEnter(){
    await this.getClass();
    await this.getProgression();
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
        console.log(character_class);
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
        console.log(progression);
      }
      else if(error){
        console.log(error)
      }
    }
    catch (error){
      console.log(error);
    }
  }
}