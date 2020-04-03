var express = require('express');
var app = express()
var fs = require('fs');
var mainpage = require('./lib/index.js');
var moviepage = require('./lib/moviepage.js');
var path = require('path');
var errorpage = require('./lib/err.js');

app.use(express.static('public'));

app.get('/', function(request, response){
    fs.readdir('./data', function(error, filelist){
        var title = 'MovieFlex'
        var index_html = mainpage.HTML(title)
        response.send(index_html);
    });
})

app.get('/movie/:pageId', function(request, response) {
    fs.readdir('./data', function(error, filelist){
        var filteredId = path.parse(request.params.pageId).base;
        fs.readFile(`data/${filteredId}`, 'utf8', function(err, data) {
            if ( err ) throw err;
            var arr = data.split("\r\n");
            var HeroImage = arr[0];
            var logoImage = arr[1];
            var movie_title = request.params.pageId;
            var actors = arr[2]; //에러나면 Tostring 추가하기
            var story = arr[3];
            var movie_link = arr[4];
            var movie_html = moviepage.HTML(movie_title, HeroImage, logoImage, actors, story, movie_link);
            response.send(movie_html);
        });
        // fs.readFile('data/All_data', 'utf8', function(err, data){
        //     if ( err ) throw err;
        //     var arr = data.split("\n");
        //     var movie_title = request.params.pageId;
        //     var movie_html = moviepage.HTML(movie_title, HeroImage, actors, stroy, movie_link)
        // })
    });
});


app.use(function(req, res, next){
    var error = errorpage.HTML();
    res.send(error);
})


app.listen(3000, function() {
    console.log("Example app is running on port 3000");
});
