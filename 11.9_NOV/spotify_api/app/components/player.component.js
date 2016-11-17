(function(){
    'use strict';

    var spotify = {
        templateUrl : "./app/components/player.component.html",
        controller : spotifyCtrl
    };

    angular
        .module("spotify")
        .component("spotifyPlayer", spotify)

    spotifyCtrl.$inject = ['apiSpotify'];
    function spotifyCtrl(apiSpotify){
        var spotify = this;

        spotify.playlist = null;
        spotify.song = null;
        spotify.audio = new Audio;

        spotify.play = play;
        spotify.search = doSearch;
        spotify.milliseconds = milliseconds;

        function play(song) {
            spotify.song = song;
            spotify.audio.src = song.preview_url;
            spotify.audio.pause();
            spotify.audio.play();
        }

        function milliseconds(ms) {
            var min = Math.floor(ms/1000/60);
            var sec = Math.floor((ms/1000)%60);

            return min + ":" + sec;
        }

        function doSearch(){
            spotify.apiData = apiSpotify.get({
                song : spotify.song_name
            }).$promise.then(function(response){
                console.log(response.tracks.items);
                spotify.playlist = response.tracks.items;
            });
        }
    }
})();