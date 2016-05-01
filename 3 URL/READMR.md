# URL params


### Query String

request.query.name gives you the value of the query string parameter of name.

```
localhost:3000/blocks?limit=2

var limit = request.query.limit ;

limit = 2

```


##  URL path  (Dynamic Routes)

'/blocks2/:name' creates name property on the request.params object
so request.paramas.name give the value of the paramater on the url.


```
app.get('/blocks2/:name' , function(req, res){

	var description = blocks2[req.params.name];
	if(!description){
		res.status(404).json(' no description for ' + req.params.name);
	} else {
		res.json(description);
	}

});
```
##  preconditions (app.param)
app.param is use for preconditions we can use the params of the request
and create new objects on the request

Example:

Normalizing request

```
app.param('name', function(req, res , next){
	var name = req.params.name;
	var block = name.slice(0,1).toUpperCase() + name.slice(1).toLowerCase();
	req.blockName = block;

	next();
});
```
now blockName is new property on the request
```
app.get('/locations/:name', function(req, res){
	var description = blocks2[req.blockName];
	if(!description){
		res.status(404).json(' no description for ' + req.blockName);
	}else {
		res.json(description)
	}

});
```
