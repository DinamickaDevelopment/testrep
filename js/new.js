$(document).ready(function () {
    var windowWidth, windowHeight, containerHeight,
		container = $('#slide-container'),
		slidingBox = $('#sliding-box');

    initContainer();

    $(window).resize(function () {
        initContainer();
    });

    function initContainer() {
        windowWidth = $(window).width();
        windowHeight = $(window).height();
        containerHeight = windowHeight;
        container.css('height', containerHeight);
        slidingBox.css('height', containerHeight);
        slidingBox.children('section').css('height', containerHeight);
    }

 
});



