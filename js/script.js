$(document).ready(function () {

    var start_time = new Date("November 14 , 2015 22:00:00").getTime();

    var current_time = new Date().getTime();

    var finish_time = new Date("December 1, 2015 22:00:00").getTime();
        
    var remain_time = finish_time - current_time;

    

    var full_period = finish_time - start_time;

    $('#counter').countdown(
        {
            timestamp: (new Date()).getTime() + remain_time
        });

    //Create a three progressbar

    var progressbarCircleLeft = $("#progressbarCircleLeft");
    progressbarCircleLeft.progressbar({
        value: 0,
        max: 20

    });

    var progressbar = $("#progressbar");
    progressbar.progressbar({
        value: 0,
        max: 360
    });

    var progressbarCircleRight = $("#progressbarCircleRight");
    progressbarCircleRight.progressbar({
        value: 0,
        max: 20
    });

    //UpDate Progress bar
    var oneTickPeriod = Math.floor( full_period / 390); // 390 is a progress bar width

    var tickNumber = 0;
    function MoveBar()
    {
        var elapsed_time =  new Date() - start_time;

        tickNumber = elapsed_time / oneTickPeriod;
                
        SetValueforBar(tickNumber);
    }
    setInterval(MoveBar, 100);

    //Set a new value for progress bar 
    function SetValueforBar(number) {

        if (number <= 20 ) {
            progressbarCircleLeft.progressbar("option", "value", number);
        }
        else if (number > 20 && number < 370) {
            progressbarCircleLeft.progressbar("option", "value", number);
            number = number + 5 - 20;
            progressbar.progressbar("option", "value", number);
        }
        else if (number > 370) {
            progressbarCircleLeft.progressbar("option", "value", number);
            progressbar.progressbar("option", "value", number);

            number = number - 370;

            progressbarCircleRight.progressbar("option", "value", number);
        }
        
    }

});

