var express = require('express');
 var app = express();

 app.get('/', function(request , response) {

		response.send('hello world');
 });

 app.get('/blocks', function(resquest , response) {

 		var blocks = ['Fixed', 'absolute', 'relative'];
 		response.send(blocks);
 		//response.json(blocks);
 });

  app.get('/blocks2', function(resquest , response) {

  		response.redirect(301,'/parts');
 });

 app.listen(3000, function(){

 	console.log (" Listening on port 3000");
 });





 /* ==============================================================================================



		HOW TO RUN THE APP ?

		$ node app.js

		HOW I TEST THE APP?

		$ curl http://localhost:3000/


		CURL CAN PRINT THE HEADERs OF THE RESPONSE

		$ curl -i http://localhost:3000/blocks




=========================================================================================================== */
