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
  skillActions: skill_actions[] = [];

  constructor(private skillService: SkillsService,
              private route: ActivatedRoute) { }

  public async ionViewWillEnter(){
    await this.getSkill();
    await this.getSkillActions();    
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

  public async getSkillActions(){
    try{
      const {data: actions, error} = await this.skillService.getSkillActions(parseInt(this.idSkill(), 10))
      if (actions){
        this.skillActions = actions;
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
