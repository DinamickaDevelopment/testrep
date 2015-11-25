$(document).ready(function () {
    var time = new Date();
    a = time.getTime( );
    $('#counter').countdown(
        {
            timestamp: (new Date()).getTime() + 15 * 24 * 60 * 60 * 1000
	});
});

