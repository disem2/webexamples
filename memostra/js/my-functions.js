	function setActive(list) {	
		$(list).each(function(e){
			$(this).click(function(index){		
				$(list).removeClass("active");
				$(this).addClass("active");
			});	
		})
	}	
	
	function autoScaling(navigation, container) {
		var containerWidth = $(container).width();
		var textWidth = getTextWidth(navigation);
		var paddings = (containerWidth - textWidth) / $(navigation).length / 2;
		
		$(navigation).css('padding-left', paddings).css('padding-right', paddings);
		
		
		function getTextWidth(list) {			
			var result = 0;
			
			$(list).each(function(){
				result += $(this).width();
			})
			return result;
		}	
	}