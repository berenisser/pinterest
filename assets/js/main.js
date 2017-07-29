$(document).ready(function() {
	console.log(info);
	info.forEach(function(el){
		console.log(el.title);

		$('#imagenes').append('<div class="post" id="'+el.id+'">'+
			'<img src="dist/img/'+ el.id +'.jpg" alt="">'+
			'<div class="text">'+
			'<h4>'+el.title+'</h4>'+
			'<p>'+el.description+'</p>'+
			'</div>'+
			'</div>');
	})

	
});