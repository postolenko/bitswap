function getAnimation() {
  $(".animate").each(function() {
    if( $(this).offset().top <= $(document).scrollTop() + $(window).height() ) {
      $(this).addClass("active");
    }
  });
}

function getSidebarPosition() {
	if( $("#sidebar").length > 0 && bodyWidth > 767) {
		var sidebarWrappTopCoord, sidebarWidth, sidebarWrappBottomCoord, windowtopCoord, windowBottomCoord;
		sidebarLeftCoord = $(".sidebar_wrapp").offset().left;
		sidebarWrappTopCoord = $(".sidebar_wrapp").offset().top;
		sidebarWrappBottomCoord = $(".bottom_coord").offset().top;
		windowTopCoord = $(document).scrollTop();
		windowBottomCoord = windowTopCoord + $(window).height();
		sidebarWidth = $(".widthVal").width();
		$("#sidebar").css({
			"width" : sidebarWidth + "px"
		});
		if( windowTopCoord > sidebarWrappTopCoord ) {
			$("#sidebar").addClass("fixed");
			$("#sidebar").removeClass("absolute");
			$("#sidebar").css({
				"left" : sidebarLeftCoord + "px"
			});
			if($("#sidebar").offset().top + $("#sidebar").outerHeight() >= sidebarWrappBottomCoord) {
				$("#sidebar").removeClass("fixed");
				$("#sidebar").addClass("absolute");
				$("#sidebar").css({
					"left" : 0
				});
			}
		} else {
			$("#sidebar").removeClass("fixed");
			$("#sidebar").removeClass("absolute");
			$("#sidebar").css({
				"left" : 0
			});
		}
	}
}

function getRespBtnParams() {
	if($(document).scrollTop() >= $(".resp_menu_btn_wrapp").offset().top ) {
		$(".resp_menu_btn").addClass("fixed");
	} else {
		$(".resp_menu_btn").removeClass("fixed");
	}
}

var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

$(window).resize(function() {
	getAnimation();
	getSidebarPosition();
	getRespBtnParams();
	bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;
});

$(document).scroll(function() {
	getAnimation();
	getSidebarPosition();
	getRespBtnParams();
});

$(document).ready(function() {
	getAnimation();
	$('.article .right > ul > li:nth-child(5n+5)').addClass('five');
	$('.sidebar > ul > li:nth-child(5n+5)').addClass('five');
	getSidebarPosition();
	getRespBtnParams();

    $(".resp_menu_btn").click(function(e) {
        e.preventDefault();
        if( $("#sidebar").is(":hidden") ) {
            $("#sidebar").fadeIn(300);
            $(this).addClass("active");
        } else {
            $("#sidebar").fadeOut(300);
            $(this).removeClass("active");
        }
    });
    $(this).keydown(function(eventObject){
        if (eventObject.which == 27 &&
            $("#sidebar").is(":visible") ) {
                $("#sidebar").fadeOut(300);
                $(".resp_menu_btn").removeClass("active");
        }
    });

    $(".close_sidebar").on("click", function(e) {
    	e.preventDefault();
    	$("#sidebar").fadeOut(300);
    	$(".resp_menu_btn").removeClass("active");
    });

});