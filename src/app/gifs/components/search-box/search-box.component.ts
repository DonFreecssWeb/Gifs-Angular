import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/GifsService';

@Component({
    selector: 'gifs-search-box',
    template: ` 
        <h5>Buscar:</h5>
        <input (keyup.enter)="searchTag()" type="text" class="form-control" placeholder="Buscar gifs..." #buscador>
    `
})

export class SearchBoxComponent {
    constructor(private gifservice:GifsService) { }

    @ViewChild("buscador")
    public heroToSearch! : ElementRef<HTMLInputElement>

    public searchTag(){
        
        this.gifservice.searchTag(this.heroToSearch.nativeElement.value)
        this.heroToSearch.nativeElement.value = ""        
    }
}