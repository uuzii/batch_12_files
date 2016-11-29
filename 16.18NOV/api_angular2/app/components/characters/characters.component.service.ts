/**
 * Created by JOSE G RODRIGUEZ on 18/11/2016.
 */

import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise'
import {Injectable} from "@angular/core";

@Injectable()
export class MarvelService{
    constructor(private http:Http){}

    marvelCharacters(){
        let url = 'http://gateway.marvel.com:80/v1/public/characters?ts=1&apikey=4339f97c8d2f4e6b58223609ccd215b8&hash=a00641a5c54db3011f573060d17696d3';
        return this.http.get(url)
            .toPromise()
            .then(respuesta => respuesta.json().data.results)
            .catch(this.oneError);
    }

    private oneError(error:any){
        console.log(`Error ${error} al consumir la API de Marvel`);
        return Promise.reject(error.message || error);
    }
}