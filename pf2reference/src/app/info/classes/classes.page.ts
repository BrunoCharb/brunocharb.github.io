import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {ClassServiceService} from '../../services/class-service.service';
import {Character_classes} from '../../models/character_classes';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.page.html',
  styleUrls: ['./classes.page.scss'],
})
export class ClassesPage implements OnInit {
  classList: Character_classes[] = [];

  constructor( private classService: ClassServiceService) { }
  async ionViewWillEnter() {
    await this.getAllClasses();
    console.log(this.classList);
  }
  async ngOnInit() {

  }
  public async getAllClasses(){
    try{
      const {data: character_classes, error} = await this.classService.getAllClasses();
      if(character_classes){
        this.classList = character_classes;
        console.log(character_classes);
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
