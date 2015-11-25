$('#mc-embedded-subscribe').on('click', MailChimpLogick);


function MailChimpLogick(event) {
    event.preventDefault();
    //Form Validation
    var isValid = ValidCheck();    
    if (!isValid) {
        $('#mce-EMAIL').on('blur', ValidCheck)
    } else {
        var email = $('#mce-EMAIL').val()
        SubscribeSend(email);
    }

    function ValidCheck() {
        if ($('#mce-EMAIL').val() <= 0) {
            $('#mce-EMAIL').addClass("err");
            return false;
        } else {
            $('#mce-EMAIL').removeClass("err");
        }
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test($('#mce-EMAIL').val())) {
            $('#mce-EMAIL').addClass("err");
            return false;
        } else {
            $('#mce-EMAIL').removeClass("err");
        }
        return true;
    }
    function SubscribeSend(mail) {
        var DataForAdmin = JSON.stringify({
            'key': 'V0D_Zxz9tADoT1PJUBYXhQ',
            'message': {
                'from_email': 'Comingsoon@newsletter.net',
                'to': [{ 'email': 'info@dinamicka.com', 'type': 'to' }],
                'autotext': 'true',
                'subject': 'New  ' + email,
                'html': '<body><div style="width:100%;font-size:20px;margin-top:30px;text-align:center">New e-mail adress [ ' + email + ' ]  was succesfully added</div></body>'
            }
        }), DataForUser = JSON.stringify({
            'key': 'V0D_Zxz9tADoT1PJUBYXhQ',
            'message': {
                'from_email': 'Comingsoon@newsletter.net',
                'to': [{ 'email': mail, 'type': 'to' }],
                'autotext': 'true',
                'subject': 'Newsletter',
                'html': '<body><div style="width:100%;font-style:italic;font-size:32px;text-align:center">Thanks!</div><div style="width:100%;font-size:20px;margin-top:20px;text-align:center">Your e-mail adress was succesfully added to our newsletter</div></body>'
            }
        });
        $.ajax({
            type: "POST",
            url: 'https://mandrillapp.com/api/1.0/messages/send.json',
            data: DataForAdmin,
        }).done(function (response) {
                $.ajax({
                    type: "POST",
                    url: 'https://mandrillapp.com/api/1.0/messages/send.json',
                    data: DataForUser,
                }).done(function (response) {
           });
        });
        $('#MSG').html('Your e-mail adress ('+email+') <br/> was succesfully added to our newsletter')
        $('#Maillayer').show();
        $('#MSGbtn').click(function () { $('#Maillayer').hide(); })
    }


}