var express = require('express');
var app = express();


 var logger = require('./logger');
 var test = require('./test');
 var onlyGet = require('./only_get');


 app.use(onlyGet);
 app.use(test);
 app.use(logger);

app.use(express.static('public'));

app.get('/blocks', function (req , res ) {

		var blocks = ['block 1', 'block 2', 'block 3'];
		res.json(blocks);
});



app.listen(3000), function () {
	console.log("running at port 3000");
};



/* ======================================================================================

	STATIC MIDDLEWARE

	permite acceder a los archivos que esten en la carpeta declarada

	 app.get('/', function (req , res) {

 	   res.sendFile(__dirname + '/public/index.html');

    });

		=================================================================================== */
