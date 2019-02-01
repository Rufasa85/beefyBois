const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use('/', express.static(__dirname + '/static'));

app.get('/', function(req, res) {
	res.render('index')
});

app.get('/reviews', (req,res)=>{
	res.render('reviews');
})

app.listen(process.env.PORT || 3000);