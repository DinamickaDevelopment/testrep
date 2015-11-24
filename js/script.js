
$(document).ready(function(){



    $('#counter').countdown(
        {
            timestamp: (new Date()).getTime() + 13 * 23 * 62 * 60 * 1000
	});

    

    /*background*/
    //    var windowWidth, windowHeight, containerHeight,
	//	container = $('#slide-container'),
	//	slidingBox = $('#sliding-box');

    //initContainer();

    //$(window).resize(function () {
    //    initContainer();
    //});

    //function initContainer() {
    //    windowWidth = $(window).width();
    //    windowHeight = $(window).height();
    //    containerHeight = windowHeight;
    //    container.css('height', containerHeight);
    //    slidingBox.css('height', containerHeight);
    //    slidingBox.children('section').css('height', containerHeight);
    //}
    //was realised by CSS



});

