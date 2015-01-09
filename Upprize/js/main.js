$(function (){
	autoScaling('#nav a', '#nav');
	setActive('#nav a');
	setActive('.tabset-link', $('.tabset-link').length);
	$("#tabs").tabs( { selected: tabs-2 } );
	slideGallery($('#gallery'), $('.winner'), 48, '#l-arrow', '#r-arrow');
	
	function setActive(list, length) {	
		var listLength = length || list.length;
		$(list).each(function(index){		
				if(index === 0) {
					$(this).css('border-radius', '16px 4px 4px 16px');
				}else if(index === listLength - 1){
					$(this).css('border-radius', '4px 16px 16px 4px');
				}	
			$(this).click(function(e){
				e.preventDefault();	
				$(list).removeClass("active");
				$(this).addClass("active");
			});	
		})
	}	
	
	function autoScaling(navigation, container) {
		var containerWidth = $(container).width();
		var textWidth = getTextWidth(navigation);
		var paddings = Math.floor((containerWidth - textWidth) / $(navigation).length / 2);
		var lastPadding = (((containerWidth - textWidth) / $(navigation).length / 2) % paddings) * $(navigation).length;
		
		$(navigation).css('padding-left', paddings).css('padding-right', paddings);
		$(navigation).last().css('padding-right', (lastPadding * 2 + paddings));
		
		
		function getTextWidth(list) {			
			var result = 0;
			
			$(list).each(function(){
				result += $(this).width();
			})
			return result;
		}	
	}
	
	function slideGallery(container, list, margin, prev, next) {
		var step = margin + $($(list)[0]).width();
		var elNumber = Math.round($(container).width() / step);
		var position = 0;
		
		setPosition();	
		
		$(prev).on('click', function(e){
			e.preventDefault();
			
			if (position < 0) {			
				position += step;			
				setPosition();
			}
		})
				
		$(next).on('click', function(e){
			e.preventDefault();
			if (position > -(step*(list.length-elNumber))) {			
				position -= step;			
				setPosition();
			}			
		})	
		
		function setPosition() {				
			$(list).each(function(index){
				$(this).css('left', (index * step + position) + 'px');
			})			
		}
		
	}
})
