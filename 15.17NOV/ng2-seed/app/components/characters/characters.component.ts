/**
 * Created by JOSE G RODRIGUEZ on 18/11/2016.
 */

import {Component} from "@angular/core";
import {MarvelService} from "./characters.component.service";

@Component({
    selector: 'marvel-heroes',
    templateUrl: '../app/components/characters/characters.component.html',
    styleUrls: ['../app/components/characters/characters.component.css']
})

export class CharactersComponent{
    heroes: Array<Object>;
    constructor(private marvelservice: MarvelService){}

    listHeroes(){
        this.marvelservice.marvelCharacters()
            .then(heroes =>  this.heroes = heroes)
    }

    ngOnInit(){
        this.listHeroes();

    }
}