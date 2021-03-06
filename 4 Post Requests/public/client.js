$(function(){

	$.get('/blocks' , appendToList);

	$('.block-list').on('click', 'i[data-block]', function(event){
			if(!confirm('Are you sure')){
				return false;
			}
			var target = $(event.currentTarget);

			$.ajax({
			type:	'DELETE', url: '/blocks/' + target.data('block')
			}).done(function(){
				target.parents('li').remove();
			});
	});

// Create a block and add it to a list
	$('form').on('submit', function(event){
		event.preventDefault();
		var form = $(this);
		var blockData = form.serialize();
		console.log('blockData : ',blockData);

		$.ajax({
			type: 'POST', url: '/blocks', data: blockData
		}).done(function(blockName){
			appendToList([blockName]);
			form.trigger('reset');
		});
	});

// Append blocks in a list
	function appendToList(blocks) {
		var list = [];
		var content , block;
		for(var i in blocks){
			block = blocks[i];
			content = '<i class="fa fa-trash" aria-hidden="true" data-block= '+ block +'></i><a href="/blocks/'+ block + '">' + block + '</a>';
			list.push($('<li>', { html : content } ));
		}

		$('.block-list').append(list);
	}

});


/*=============================================================================================

	Se consume con Jquery el arreglo de bloques que definimos en nuestra api.

	 $(event.currentTarget);
	 the icon elment that was clicked

	event.preventDefault();
	Previene el form de un submit inmendiato

 	form.serialize();
	Transform form data to URL-encoded notation

	form.trigger('reset');
	cleans up form text input fields

================================================================================================ */
