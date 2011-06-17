function getHrefContent(element, container, result) {
	href = element.attr('href');
	$(result).fadeOut(function(){
		$(container).addClass('ajax-loading')
		$(container).load(href + ' ' + result, function(){
			$(result).hide()
			$(result).fadeIn()
			$(container).removeClass('ajax-loading')
		});
	})
}

$(document).ready(function(){
	$("header h2").fitText(0.5);
	$('a.ajax').live('click', function(e){
		e.preventDefault();
		getHrefContent($(this), '#content', '#result')
		return false
	})
})