#POST Request


### BodyParser

BodyParser is a middleware function (query parse module) , we can use it as a handler in our functions.
using multiple route handlers is useful for re-using middlewares that load resourses,
perform validations, authentication, etc.

```js
npm install body-parser
  ```
### Usage

parseUrlencoded is used as handler

```js
  var parseUrlencoded = bodyParser.urlencoded({ extended : false });

  app.post('/blocks', parseUrlencoded , function(req , res){

  });

  ```

### The req.body

 req.body has the params of the request

```js

var newBlock = req.body;
newBlock.description;

```
