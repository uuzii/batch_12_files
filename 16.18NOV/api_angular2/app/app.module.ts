/**
 * Created by urielmiranda on 03/10/16.
 */
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app/app.component'
import {CharactersComponent} from "./components/characters/characters.component";
import {MarvelService} from "./components/characters/characters.component.service";
import {HttpModule} from  "@angular/http"

@NgModule({
    imports: [ BrowserModule, HttpModule],
    declarations: [ AppComponent, CharactersComponent ],
    bootstrap: [AppComponent],
    providers: [MarvelService]
})
export class AppModule { }
