var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({ extended : false });


var blocks = {'Fixed' : 'some text fixed' , 'Movable' : 'description of movable' , 'Rotating' : ' bla bla rotating'};

router.route('/')

	.get(function (req , res ) {
			res.json(Object.keys(blocks));
	})

	// create function
	.post(parseUrlencoded , function(req , res){
		  var newBlock = req.body;

		  if(newBlock.description.length > 4){
		    blocks[newBlock.name] = newBlock.description;
		    res.status(201).json(newBlock.name);
		  } else {
		    res.status(400).json('invalid description');
		  }

		});


router.route('/:name')
  .all(function(req, res , next){
    var name = req.params.name;
    // var block = name[0].toUpperCase() + name.slice(1).toLowerCase();
		var block = name;
    req.blockName = block;
		next();
  })
	// detail
	.get(function(req, res){
		  var description = blocks[req.blockName];
		  if(!description){
		    res.status(404).json('the block ' + req.blockName + ' is not found');
		  } else {
		    res.json(description);
		  }
		})

	// delete block
	.delete(function(req, res){
		  if(blocks[req.blockName]){
		    delete blocks[req.blockName];
		    res.sendStatus(200);
		  } else {
		    res.sendStatus(404);
		  }
		});

module.exports = router;

/*=============================================================================================
	express.Router();
	allows wrap ower Blocks logic in a single file , its important to module.exports = router; .
  Chaining functions made the code more readable.

	.all() gets all the requests in the route, and its like a middleware.
================================================================================================ */
