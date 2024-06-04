import { Component, Input } from '@angular/core';
import { GifsService } from '../../services/GifsService';
import { Gifs } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  constructor(private gifsService:GifsService){}

  
   get  gifs():Gifs[]{
        console.log(this.gifsService.gifList)
        return this.gifsService.gifList   }
}
