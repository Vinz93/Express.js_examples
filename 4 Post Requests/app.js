var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({ extended : false });

app.use(express.static('public'));
var blocks = {'Fixed' : 'some text fixed' , 'Movable' : 'description of movable' , 'Rotating' : ' bla bla rotating'};


app.get('/blocks', function (req , res ) {
		res.json(Object.keys(blocks));
});

// create function
app.post('/blocks', parseUrlencoded , function(req , res){
  var newBlock = req.body;

  if(newBlock.description.length > 4){
    blocks[newBlock.name] = newBlock.description;
    res.status(201).json(newBlock.name);
  } else {
    res.status(400).json('invalid description');
  }

});


// detail
app.get('/blocks/:name', function(req, res){
  var name = req.params.name;
  var description = blocks[name];
  if(!description){
    res.status(404).json('the block ' + name + ' is not found');
  } else {
    res.json(description);
  }
});

app.delete('/blocks/:name', function(req, res){
  var name = req.params.name;
  if(blocks[name]){
    delete blocks[name];
    res.sendStatus(200);
  } else {
    res.sendStatus(404);
  }

});





app.listen(3000, function () {
	console.log("running at port 3000");
});


/*=============================================================================================

    var parseUrlencoded = bodyParser.urlencoded({ extended : false });

    This returns a middleware function (query parse module) an now we can use it as a handler in our functions.
    using multiple route handlers is useful for re-using middlewares that load resourses,
    perdorm validations, authentication, etc.
    { extended : false }
    forces the use of the native querystring node library


    var newBlock = req.body;
    the req.body has the form data.
================================================================================================ */
