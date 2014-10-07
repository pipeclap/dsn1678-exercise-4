var $win = $(window);

$win.on('scroll', function () {
	var scrollPos = $win.scrollTop();

	console.log (scrollPos);
});	