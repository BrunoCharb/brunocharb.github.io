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
        console.log(this.bgList);
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
