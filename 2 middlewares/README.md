# middlewares


### ¿ Qué son ?

Las funciones de un MIDDLEWARE son funciones que tienen acceso al objeto de solicitud (req), al objeto de respuesta (res)
y a la siguiente función de middleware en el ciclo de solicitud/respuestas de la aplicación.

Las funciones de middleware pueden realizar las siguientes tareas:

  - Ejecutar cualquier código.
  - Realizar cambios en la solicitud y los objetos de respuesta.
  - Finalizar el ciclo de solicitud/respuestas.
  - Invocar el siguiente middleware en la pila.


- Para saber cuando termina una peticion debemos usar EventsListnners , el evento finish se activa cuando el SO termina
  de manejar la peticion y se hace un callback() de manera asincrona.

### Ejemplo de un middleware Logger.js

Esta función interceptara todas las peticiones y mostrará su duración


```
module.exports = function(request , response , next ){

	var start = +new Date();
	var stream = process.stdout;
	var url = request.url;
	var method = request.method;

	response.on('finish', function(){

		var duration = +new Date() - start;
		var message = method + ' to ' + url + ' \n took ' + duration + ' ms . \n\n' ;
		stream.write(message);

	});


	next();

}
```

El middleware se invoca en la aplicacion (app.js) de la siguiente forma


```
 var logger = require('./logger');
 app.use(logger);

```

### static middleware

Es un middleware que trae express que permite cargar directorios en la aplicación,
sí tenemos nuestro lado del cliente en una carpeta se puede cargar con este middleware

```
app.use(express.static('public'));

```
