function getHrefContent(element, container, result) {
	href = element.attr('href');
	$(container).fadeOut(function(){
		$(container).load(href + ' ' + result, function(){
			$(container).fadeIn()
		});
	})
}

$(document).ready(function(){
	$("header h2").fitText(0.5);
	
	$('a.ajax').live('click', function(e){
		e.preventDefault();
		getHrefContent($(this), '#content', '#result')
	})
})