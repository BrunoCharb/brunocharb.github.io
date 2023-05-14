import { Component, OnInit } from '@angular/core';
import { Backgrounds } from 'src/app/models/backgrounds';
import { BackgroundsService } from 'src/app/services/backgrounds.service';

@Component({
  selector: 'app-backgrounds',
  templateUrl: './backgrounds.page.html',
  styleUrls: ['./backgrounds.page.scss'],
})
export class BackgroundsPage implements OnInit {
  bgList: Backgrounds[] = [];
  bgListFull: Backgrounds[] = [];
  search_term: string = '';

  constructor(private bgService: BackgroundsService) { }

  ngOnInit() {
  }

  async ionViewWillEnter (){
    await this.getBackgrounds();
  }

  public async getBackgrounds(){
    try{
      const {data: bg, error} = await this.bgService.getAllBackgrounds();
      if(bg){
        this.bgList = bg;
        this.bgListFull = bg;        
      }
      else if (error){
        console.log(error);
      }
    }
    catch(error){
      console.log(error);
    }
  }

  filterArray(event: any) {
    //Assigne la valeur à ce qui est indiqué dans l'event.
    this.search_term = event.target.value;

    //Si la valeur n'est pas vide (possibilité de la trim ou bien juste this.val)
    if (this.search_term.trim() !== '') {
      this.bgList = this.bgListFull.filter(bg =>
        bg.name.toLowerCase().includes(this.search_term.toLowerCase())
        || bg.description.toLowerCase().includes(this.search_term.toLowerCase())
        || this.checkAbilities(bg, this.search_term.toLowerCase())
        || this.checkSkills(bg, this.search_term.toLowerCase())
        || this.checkSkillFeats(bg, this.search_term.toLowerCase())
        || (bg.extra_info && bg.extra_info.toLowerCase().includes(this.search_term.toLowerCase()))
      );
    }
    else{
      this.bgList = this.bgListFull;
    }
  }

  checkAbilities(bg: Backgrounds, fragment: string): boolean{
    if(bg.abilities){
      for (const ability of bg.abilities){
        if(ability.toLowerCase().includes(fragment)){
          return true;
        }
      }
    }        
    return false;
  }

  checkSkills(bg: Backgrounds, fragment: string): boolean{
    if(bg.skills){
      for (const skill of bg.skills){
        if(skill.toLowerCase().includes(fragment)){
          return true;
        }
      }
    }    
    return false;
  }

  checkSkillFeats(bg: Backgrounds, fragment: string): boolean{    
    if(bg.skill_feats){
      for (const skill of bg.skill_feats){
        if(skill.toLowerCase().includes(fragment)){
          return true;
        }
      }
    }    
    return false;
  }

}
