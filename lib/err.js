module.exports = {
    HTML:function(title, body){
      return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Wrong Path</title>
      </head>
      <body>
        <div class="image-container">
            <p class="content">Can't find Movie Page Sorry<p>
            <img src="https://steamuserimages-a.akamaihd.net/ugc/930441829001688385/C5C95FB0A898646437F361003E6E61B5CA099358/" class = "image">
            <button class="WatchButton", onclick="location.href='/'">Go back MovieFlex Home</button>
        </div>
      </body>
      </html>
      <style>
        .header{
            box-shadow: 4px 4px 4px #000;
            background-color: black;
            position: fixed;
            z-index: 20;
            top: 0;
            left: 0;
            right: 0;
        }
        .image-container{
            overflow: hidden;
            display: flex;
            align-items: center;
            width: 100%px;
            height: 100%px;
        }
        .content{
            font-size: 100px;
            position: absolute;
            left: 302px;
            top: 270px;
            text-shadow:-1.5px 0 black,0 1.5px black,1.5px 0 black,0 -1.5px black;
            color: white
        }
        a:link{
            text-decoration: none;
        }
        .WatchButton{
            font-size: 100px;
            position: absolute;
            left: 780px;
            top: 600px;
            color: black;
            width: 300px;
            height: 100px;
            font-size: 28px;
            background-color: orange;
        }
    
      </style>
      `;
    }
  }