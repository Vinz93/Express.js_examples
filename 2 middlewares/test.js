module.exports = function( req, res, next ){

	console.log(' middleware test | ' + req.url );
	next();
}