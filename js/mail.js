$('#mc-embedded-subscribe').on('click', MailChimpLogick);


function MailChimpLogick(event) {
    event.preventDefault();
    //Form Validation
    var isValid = ValidCheck();    
    if (!isValid) {
        $('#mce-EMAIL').on('blur', ValidCheck)
    } else {
        var email = $('#mce-EMAIL').val(),
        emailMD5Ar =CryptoJS.MD5(email),
        emailMD5hash = emailMD5Ar.toString(CryptoJS.enc.Hex);
        SubscribeStatus(emailMD5hash);
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
function SubscribeStatus(hash) {
    $.ajax({
        type: "GET",
        url: 'https://us12.api.mailchimp.com/3.0/lists/3318c17c97/members/' + hash,
        user: 'DinDev:ad6d137d34604e59348b4f7d07ca5848-us12'
    }).done(function (response) {
        alert(response[0]);
    });
}

}

