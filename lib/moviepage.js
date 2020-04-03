module.exports = {
    HTML:function(movie_title, HeroImage, logoImage, actors, story, movie_link) {
        return `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>${movie_title} | MovieFlex</title>
                <div class="header">
                    <a href="/" class="GobackIndexButton">MovieFlex</a>
                </div>
            </head>
            <body>
                <div class="mainContainer">
                    <div class="MovieImagesContainer">
                        <div class="HeroImagePos">
                            <img src="${HeroImage}" class="MovieImage">
                        </div>
                        <div class="MovieNameImage">
                            <img class="NameImageSize" src="${logoImage}">
                        </div>
                    </div>
                    
                    <div class="DetailsContainer">
                        <div class="TitleDiv"><h1 class="Title">${movie_title}</h1></div>
                        <div class="MovieInfo">
                            <span class="actors">Starring: ${actors}</span>
                        </div>
                        <div class="story">
                            <span class="story_span">${story}</span>
                        </div>
                        <button class="WatchButton", onclick="window.open('${movie_link}')">Watch now.</button>
                        
                    </div>
                </div>
            
            </body>
            </html>
            <style>
            .header{
                box-shadow: 2px 2px 2px #000;
                background-color: black;
                position: fixed;
                z-index: 20;
                top: 0;
                left: 0;
                right: 0;
            }

            .GobackIndexButton{
                font-size: 45.6px;
                color: orange;
                font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
                font-weight: bold;
                margin-left: 30px;
            }

            body{
                background-color:#363636;
            }
            #MovieExplain{
                font-size: 50px;
                font-weight: bold;
                text-align: center;
                font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
                background-color: darkgray;
            }
            #JurassicParkNameImgSize{
                width: 700px;
                height: 300px;
            }
            #joker_logo{
                widht: 800px;
                height: 160px;  
            }
            .MovieImage{
                width: 100%;
                height: 100%vh;
                margin-left: -3.9px;
            }
            .MovieImagesContainer{
                margin-top: 40px;
            }

            .DetailsContainer{
                position: absolute;
                top: 760px;
                margin-bottom: 50px;
            }

            .HeroImagePos{
                position: absolute;

            }
            .MovieNameImage{
                height: auto;
                width: auto;
                position: absolute;
                right: auto;
                top: 250px;
            }

            .MovieImage{
                width: 100%px;
                height: auto;
            }

            .NameImageSize{
                width: 450px;
                height: 190px;
            }

            #MovieNameImage{
                position: absolute;
                top: 500px;
            }

            #NameImageSize{
                width: 430px;
                height: auto;

            }

            #avengers3_logo{
                margin-top: 190px;
                width: 600px;
                height: 300px;
            }
            #avengers4_logo{
                width: 600px;
                height: 300px;
            }
            #kingman2_logo{
                width: 900px;
                height: 500px;
            }
            .DetailsContainer{
                height: auto;
                margin-top: -230px;
                margin-left: 10px;
            }

            .Title{
                color: gainsboro;
                font-size: 45px;
                text-shadow:-1.5px 0 black,0 1.5px black,1.5px 0 black,0 -1.5px black;
            }

            .actors{
                font-weight: bold;
                color: white;
                text-shadow:-1.5px 0 black,0 1.5px black,1.5px 0 black,0 -1.5px black;
                font-size: 23px;
            }
            .story_span{
                font-weight: bold;
                color: white;
                font-size: 23px;
                text-shadow:-1.5px 0 black,0 1.5px black,1.5px 0 black,0 -1.5px black;
            }
            .story{
                margin-top:20px;
            }
            .WatchButton{
                margin-top: 20px;
                font-size: 21px;
                background-color: #993231;
                border-radius:0.2em;
                font-weight: bold;
                font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
            }
            a:link{
                text-decoration: none;
            }

        </style>
        `
    }
}