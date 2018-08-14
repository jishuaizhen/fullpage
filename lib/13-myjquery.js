;(function($){
	$.fn.table=function(options){
		var defaultOptions={//默认参数
			evenColor: 'evenClass',
   	 		oddColor: 'oddClass',
   	 		eventType: 'click',
   	 		eventColor: 'eventClass'
		}
		var endOptions=$.extend(defaultOptions,options);
		$(this).each(function(){
			$(this).find("tr:even:not(:eq(0))").addClass(endOptions.evenColor);
			$(this).find("tr:odd").addClass(endOptions.oddColor);
			$(this).find("tr").on(endOptions.eventType,function(){
				$(this).addClass(endOptions.eventColor).siblings().removeClass(endOptions.eventColor);
			})
		});
		return $(this);

	}
	$.fn.myanimate=function(delayTime,direction,directionNum,opacityNum,animateTime){
		$(this).delay(delayTime).animate({direction:directionNum,opacity:opacityNum},animateTime);
		return $(this);
	}

})(jQuery);