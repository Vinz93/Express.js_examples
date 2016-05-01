$(function(){

	$.get('/blocks' , appendToList);

	function appendToList(blocks) {
		var list = [];

		for(var i in blocks){

			list.push($('<li>', { text : blocks[i] } ));
		}

		$('.block-list').append(list);
	}

});


/* ############################################################################################################

	Se consume con Jquery el arreglo de bloques que definimos en nuestra api.

	########################################################################################################## */