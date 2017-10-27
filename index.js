var express = require('express');
var body = require('body-parser');
var app = express();

app.set('view engine','ejs');
app.use(body.urlencoded({extended:true}));

// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });
app.get('/', function (req, res) {
    res.render('messageboard');
});
app.post("/sendmessage", function(req, res, next){
    var temp = req.body;
    console.log(temp);
    res.send(temp);
    // res.end();
});
var port = process.env.PORT || 8080;
app.listen(port, function () {
  console.log('Example app listening on '+ port +'! fuuuuuuuu');
});
