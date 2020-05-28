var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;


$(window).load(function() {



});

$(window).resize(function() {



});

$(document).scroll(function() {



});

$(document).ready(function() {

	$('.article .right > ul > li:nth-child(5n+5)').addClass('five');
	$('.sidebar > ul > li:nth-child(5n+5)').addClass('five');

});