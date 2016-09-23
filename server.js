var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var custom={
title:'Custom',
heading:'Gifts',
content:`<p>Welcome To Made4U Gift Shop </p>`

};
function createtemp(data){
var title=data.title;
var heading=data.heading;
var content=data.content;
var temp=
`<!doctype html>
<html>
    <head>
<title>${title}
</title>
	${heading}
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="center">
            <img src="/ui/madi.png" class="img-medium"/>
        </div>
        <br>
        <div class="center text-big bold">
           ${content}
        </div>
        <script type="text/javascript" src="/ui/main.js">
        </script>
    </body>
</html>`;
return temp;

}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/custom', function (req, res) {
  res.send(createtemp(custom));
});


app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
