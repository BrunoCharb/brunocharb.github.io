import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/models/skills';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-skills-home',
  templateUrl: './skills-home.page.html',
  styleUrls: ['./skills-home.page.scss'],
})
export class SkillsHomePage implements OnInit {
  lsSkills: Skills[] = [];

  constructor(private skillsService: SkillsService) { }

  ngOnInit() {
  }

  async ionViewWillEnter() {
    await this.getSkills();
    console.log(this.lsSkills);
  }

  public async getSkills(){
    try{
      const {data: skills, error} = await this.skillsService.getSkills();
      if(skills){
        this.lsSkills = skills;
      }
      else if(error){
        console.log(error);
      }
    }
    catch(error){
      console.log(error);
    }
  }

}
