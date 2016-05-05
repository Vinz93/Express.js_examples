#Route Instance


### Router

express.Router();
allows wrap our Blocks logic in a single file , its important to module.exports = router;

```js
var router = express.Router();
  ```
### Creating routes

we use router.route('/') and then we call middlewares and functions for method (Post / get / put / delete) .
Chaining functions made the code more readable.

```js
router.route('/')

	.get(function (req , res ) {

	})

	.post(parseUrlencoded , function(req , res){

		});

  ```

### Routes with Url Name and middleware

	.all() gets all the requests in the route, you can handle every request and response in this function.

```js

router.route('/:name')
  .all(function(req, res , next){
    var name = req.params.name;
		next();
  })
	.get(function(req, res){

		})
	.delete(function(req, res){

		});

```

### Using the route in main app

now we use blocks.js and it will response for '/blocks' request.

```js
var blocks = require('./routes/blocks');
app.use('/blocks',blocks);

```
