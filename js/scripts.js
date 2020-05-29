function getAnimation() {
  $(".animate").each(function() {
    if( $(this).offset().top <= $(document).scrollTop() + $(window).height() ) {
      $(this).addClass("active");
    }
  });
}

$(window).resize(function() {
	getAnimation();
});

$(document).scroll(function() {
	getAnimation();
});

$(document).ready(function() {

	getAnimation();

	$('.article .right > ul > li:nth-child(5n+5)').addClass('five');
	$('.sidebar > ul > li:nth-child(5n+5)').addClass('five');

});