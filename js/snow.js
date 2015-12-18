setInterval(function(){
	var documentHeight = $(document).height();
	var startPositionLeft = Math.random() * $(document).width() - 100;
	var startOpacity = 0.5 + Math.random();
	
	var endPositionTop = documentHeight - 50;
	var endPositionLeft = startPositionLeft - 100 + Math.random() * 200;
	var durationFall = documentHeight * 10 + Math.random() * 4000;
	
	var animationFlake = endPositionLeft > startPositionLeft ? 'clockwise' : 'counterclockwise';
	var sizeFlake = 10 + Math.random() * 20;
	
	$('#snowflake.hidden').clone()
	.attr('class', null)
	.attr('id', 'snowflake')
	.appendTo('.background,.foreground')
	.css({
		left: startPositionLeft,
		opacity: startOpacity,
		'-webkit-animation': 'spin-' + animationFlake + ' 6s linear infinite',
		'-moz-animation': 'spin-' + animationFlake + ' 6s linear infinite',
		'animation': 'spin-' + animationFlake + ' 6s linear infinite',
		'font-size': sizeFlake
	})
	.animate({
		top: endPositionTop,
		left: endPositionLeft,
		opacity: 0.2
	},
	durationFall,
	'linear',
	function() {
		$(this).remove();
	});
}, 250);