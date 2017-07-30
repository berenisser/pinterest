$(document).ready(function() {
	console.log(info);
	$('.modal').hide();
	/*for(var i = 0; i < 20; i++){
		//console.log(el.title);
		var alto;
		if(info[i].id%2 == 0){
			alto = 430;
		} else{
			alto = 380;
		}

		$('#imagenes').append('<div class="post" id="'+info[i].id+'">'+
			'<img src="dist/img/'+ info[i].id +'.jpg" height="'+ alto +'">'+
			'<div class="text">'+
			'<h4>'+info[i].title+'</h4>'+
			'<p>'+info[i].description+'</p>'+
			'</div>'+
			'</div>');
		crearModal();
	}*/

	info.forEach(function(elem){
		var alto;
		if(elem.id%2 == 0){
			alto = 430;
		} else{
			alto = 380;
		}
		$('#imagenes').append('<div class="post" id="'+elem.id+'">'+
			'<img src="dist/img/'+ elem.id +'.jpg" height="'+ alto +'">'+
			'<div class="text">'+
			'<h4>'+elem.title+'</h4>'+
			'<p>'+elem.description+'</p>'+
			'</div>'+
			'</div>');

		$("#"+elem.id).click(function(){
			$('.modal').show();
			$('.modal').empty();
			$('#imagenes').append('<div class="modal">'+
				'<div class="cuadro-blanco">'+
					'<div class="contenedor-save">'+
						'<li><a href="#"><i class="fa fa-upload fa-lg" aria-hidden="true"></i></a></li>'+
						'<li><a href="#"><i class="fa fa-check fa-lg" aria-hidden="true"></i></a></li>'+
						'<li><a href="#"><i class="fa fa-ellipsis-h fa-lg" aria-hidden="true"></i></a></li>'+
						'<li class="right"><a href="#"><i class="fa fa-thumb-tack fa-lg" aria-hidden="true"></i> Save</a></li>'+
					'</div>'+
					'<h2>'+elem.title+'</h2>'+
					'<img src="dist/img/'+ elem.id +'.jpg" alt="">'+
					'<h3>'+ elem.user +'</h3>'+
					'<p>'+ elem.description +'</p>'+
				'</div>'+
			'</div>');
		})
	})
});