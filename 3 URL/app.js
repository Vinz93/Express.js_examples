var express = require('express');
var app = express();

var blocks = [ 'Fixed' , 'Movable', 'Rotating'];
var blocks2 = {'Fixed' : 'some text fixed' , 'Movable' : 'description of movable' , 'Rotating' : ' bla bla rotating'};

// Extracting duplication to app.param for Normalizing function

app.param('name', function(req, res , next){
	var name = req.params.name;
	var block = name.slice(0,1).toUpperCase() + name.slice(1).toLowerCase();
	req.blockName = block;

	next();
});

// query string

app.get('/blocks', function(req, res){

	if(req.query.limit >= 0){

		res.json(blocks.slice(0,req.query.limit));
	} else {

		res.json(blocks);
	}

});

// url path  (Dynamic Routes)
app.get('/blocks2/:name' , function(req, res){

	var description = blocks2[req.params.name];
	if(!description){
		res.status(404).json(' no description for ' + req.params.name);
	} else {
		res.json(description);
	}

});

// Normalizing the request parameter

app.get('/blocks3/:name', function( req , res){
	var name = req.params.name;
	var block = name.slice(0,1).toUpperCase() + name.slice(1).toLowerCase();

	var description = blocks2[block];
	if(!description){
		res.status(404).json(' no description for ' + req.params.name);
	}else {
		res.json(description)
	}
});

// Using app.param with Normalizing function
app.get('/locations/:name', function(req, res){
	var description = blocks2[req.blockName];
	if(!description){
		res.status(404).json(' no description for ' + req.blockName);
	}else {
		res.json(description)
	}

});

// Returning properties (key's) from the blocks2 object
app.get('/blocks2', function(req, res){
	res.json(Object.keys(blocks2));
});



app.listen(3000 , function(){
	console.log('the app is Listening on port 3000');
});




/* ===========================================================================

Query String localhost:3000/blocks?limit=2

request.query.limit give you the value of the query string parameter of limit.

Dynamic Rotes localhost:3000/blocks/fixed

'/blocks2/:name' creates name property on the request.params object
so request.paramas.name give the value of the paramater on the url.

app.parm is use for preconditions we can use the params of the request
and create new objects on teh request
	Example:
		req.blockName = block;






============================================================================== */
