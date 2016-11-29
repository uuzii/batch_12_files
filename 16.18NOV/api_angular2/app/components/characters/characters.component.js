/**
 * Created by JOSE G RODRIGUEZ on 18/11/2016.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var characters_component_service_1 = require("./characters.component.service");
var CharactersComponent = (function () {
    function CharactersComponent(marvelservice) {
        this.marvelservice = marvelservice;
    }
    CharactersComponent.prototype.listHeroes = function () {
        var _this = this;
        this.marvelservice.marvelCharacters()
            .then(function (heroes) { return _this.heroes = heroes; });
    };
    CharactersComponent.prototype.ngOnInit = function () {
        this.listHeroes();
    };
    CharactersComponent = __decorate([
        core_1.Component({
            selector: 'marvel-heroes',
            templateUrl: '../app/components/characters/characters.component.html',
            styleUrls: ['../app/components/characters/characters.component.css']
        }), 
        __metadata('design:paramtypes', [characters_component_service_1.MarvelService])
    ], CharactersComponent);
    return CharactersComponent;
}());
exports.CharactersComponent = CharactersComponent;
//# sourceMappingURL=characters.component.js.map