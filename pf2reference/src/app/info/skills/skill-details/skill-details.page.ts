import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { skill_actions } from 'src/app/models/skill_action';
import { Skills } from 'src/app/models/skills';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-skill-details',
  templateUrl: './skill-details.page.html',
  styleUrls: ['./skill-details.page.scss'],
})
export class SkillDetailsPage implements OnInit {

  currentSkill: Skills | undefined;
  untrainedSkillActions: skill_actions[] = [];
  trainedSkillActions: skill_actions[] = [];

  constructor(private skillService: SkillsService,
              private route: ActivatedRoute) { }

  public async ionViewWillEnter(){
    await this.getSkill();
    await this.getUntrainedSkillActions();
    console.log(this.untrainedSkillActions);
    await this.getTrainedSkillActions();
    console.log(this.trainedSkillActions);
  }

  ngOnInit() {
  }

  idSkill(): string{
    return <string>this.route.snapshot.paramMap.get('skill');
  }
  public async getSkill(){
    try{
      const {data: character_class, error} = await this.skillService.getSkill( parseInt(this.idSkill(), 10));
      if(character_class){
        this.currentSkill = character_class;
      }
      else if (error){
        console.log(error.message);
      }
    }
    catch (error){
      console.log(error);
    }
  }

  // Goes in the component
  public async getUntrainedSkillActions(){
    try{
      const {data: actions, error} = await this.skillService.getUntrainedSkillActions(parseInt(this.idSkill(), 10))
      if (actions){
        this.untrainedSkillActions = actions;
      }
      else if (error){
        console.log(error);
      }
    }
    catch(error){
      console.log(error);
    }
  }

  public async getTrainedSkillActions(){
    try{
      const {data: actions, error} = await this.skillService.getTrainedSkillActions(parseInt(this.idSkill(), 10))
      if (actions){
        this.trainedSkillActions = actions;
      }
      else if (error){
        console.log(error);
      }
    }
    catch(error){
      console.log(error);
    }
  }

}
