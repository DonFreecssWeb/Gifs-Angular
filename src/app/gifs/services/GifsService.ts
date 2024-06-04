import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gifs, SearchResponse } from '../interfaces/gifs.interfaces';
import { JsonPipe } from '@angular/common';


@Injectable({providedIn: 'root'})
export class GifsService {

    constructor(private http: HttpClient) {
        this.loadLocalStorage()
     }

    private _tagsHistory: string[] = []
    private apiKey: string = "KnHWc1Q6qukVbg8YZus2ZHudwmq3pPyI"
    private BaseURL = "https://api.giphy.com/v1/gifs"

    public gifList:Gifs[] = []


    get tagHistory(){
        //javascript el array es por referencia
        return [... this._tagsHistory]
    }

    //Agrega los gifs a la lista
    searchTag(tag: string):void{
        //Solo debe buscar, no debe organizar ni nada mas para eso se crea otros métodos
        if(tag.length === 0) return;
        this.organizedHistory(tag)
        
        // fetch("http://api.giphy.com/v1/gifs/search?q=superman&api_key=KnHWc1Q6qukVbg8YZus2ZHudwmq3pPyI&limit=10")
        // .then(response => response.json())
        // .then(data => console.log(data.data))      
      
        const params = new HttpParams()
            .set("q",tag)
            .set("limit",10)
            .set("api_key",this.apiKey)

        //console.log(`${this.BaseURL}/search?${params}`)

        this.http.get<SearchResponse>(`${this.BaseURL}/search`,{params})
        .subscribe( (resp) =>{
             
             this.gifList = resp.data
             
            
            })        
        
    }
    //Metodo que sirva para organizar las etiquetas y si hay repetidos lo coloca al inicio removiendo el anterior
    //Solo muestra 10 elementos
    public organizedHistory(tag:string){
        tag = tag.toLowerCase()

        if(this._tagsHistory.includes(tag)){
            this._tagsHistory = this._tagsHistory.filter(temp => temp !== tag)
        }
            this._tagsHistory.unshift(tag)
            this._tagsHistory = this._tagsHistory.splice(0,10)     
            
            this.saveLocalStorage()
    }

    public saveLocalStorage(){
        localStorage.setItem("tags",JSON.stringify(this._tagsHistory))
    }
    //verificar si tenemos el objeto en el localstorage porque puede venir nulo por la llave
    public loadLocalStorage(){
        if(!localStorage.getItem("tags")) return;
        this._tagsHistory = JSON.parse(localStorage.getItem("tags")!)
        
        if(this._tagsHistory.length > 0){
            this.searchTag(this._tagsHistory[0])
        }
        
    }
     
}