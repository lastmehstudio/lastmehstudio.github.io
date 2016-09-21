$(function() {

	$(document).ready(function() {

		$('li.feature_nav').on('click', function() {
			var th = $(this);
			var thId = $(this).attr('id');
			function slide() {
				$('.features_descr #' + thId).siblings('.feature.active').slideUp('slow', function() {
					$('.features_descr #' + thId).slideDown('slow').addClass('active');
				}).removeClass('active');
			};
			th.siblings('li.feature_nav').removeClass('active');
			th.addClass('active');
			switch(thId) {
				case 'record':
				slide();
				break;
				case 'mix':
				slide();
				break;
				case 'master':
				slide();
				break;
				case 'video':
				slide();
				break;
				case 'session':
				slide();
				break;
			};
		});

	});

});
