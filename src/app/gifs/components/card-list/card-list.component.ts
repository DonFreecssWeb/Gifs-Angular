import { Component, Input, OnInit } from '@angular/core';
import { GifsService } from '../../services/GifsService';
import { Gifs } from '../../interfaces/gifs.interfaces';

@Component({
    selector: 'gifs-card-list',
    templateUrl: './card-list.component.html'
})

export class CardListComponent{  
    
    @Input()
    public gifs:Gifs[] = []    
    
}