// Ellis part JS for the gallery
$(window).on('load',function() {
	makeAccordionFromGallery();
});

$(document).ready(function(){
	$('a.cbox').colorbox({
		rel: 'gallery'
		,photo: true
		,width: '640px'
		,height: '480px'
		,maxWidth: '640px'
		,maxHeight: '480px'
		,previous: '<i class="fas fa-chevron-left"></i>'
		,next: '<i class="fas fa-chevron-right"></i>'
		,overlayClose: false
		,close: '+'
		,reposition: true
		,fixed: true
	});
});



function makeAccordionFromGallery() {
	var gallery = $('.gallery-poster-ellis'),
		galleryUl = $('.gallery-poster-ellis ul'),
		galleryLi = $('.gallery-poster-ellis ul li'),
		lengthDesktop = 2,
		lengthMobile = 6,
		maxHeight = gallery.outerHeight(),
		showMore = 'see more images',
		close = 'close';

	function generateTrigger() {
		galleryUl.closest('.gallery-poster-ellis').addClass('closed').append( '<div class="gallery-trigger"><p class="opener">' + showMore + '</p><i class="fa fa-angle-double-down"></i><p class="closer">' + close + '</p></div>' );
	}
	var elHeight = '';
	generateTrigger();
	var trigger = $('.gallery-trigger');

	galleryLi.each(function()
	{
		elHeight = $(this).outerHeight();
	});

	if(window.matchMedia("(max-width: 600px)").matches)
	{
		var minHeight = (elHeight * 3);

		if(galleryLi.length > lengthMobile)
		{
			galleryUl.height(minHeight);
		}
	}
	else
	{
		var minHeight = elHeight;

		if(galleryLi.length > lengthDesktop)
		{
			galleryUl.height(minHeight);
		}
	}
	
	gallery.find('li a').click(function(e){
		console.log('before: '+gallery.attr('class'));
		if($(this).closest('.gallery-poster-ellis').hasClass('closed')) {
			console.log('after: '+gallery.attr('class'));
			e.stopPropagation();
			e.preventDefault();
			trigger.click();
			$(this).closest('.gallery-poster-ellis').removeClass('closed');
		}
	});
	
	trigger.click(function(){
		if(!$(this).hasClass('opened')) {
			$(this).addClass('opened');
			galleryUl.closest('.gallery-poster-ellis').removeClass('closed');
			galleryUl.animate({height:maxHeight},500);
		} else {
			$(this).removeClass('opened');
			galleryUl.animate({height:minHeight},500);
			galleryUl.closest('.gallery-poster-ellis').addClass('closed');
			$('html,body').animate({ scrollTop : galleryUl.offset().top }, 1000);
		}
	});
}


//END of JS for Ellis JS part
