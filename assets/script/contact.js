$(document).ready(function () {
    $('.submit').click(function () {
        var name = $('#name').val().length;
        var email = $('#email').val().length;
        var phone = $('#phone').val().length;
        var message = $('#message').val().length;
        if (name == 0) {
            $('.warning-name').html("* Input Your Name");
        } else {
            $('.warning-name').html("");
        }
        if ($('#name').change(function () {
                if ($('#name').val().length > 0) {
                    $('.warning-name').html("");
                }
            }));
        if (email == 0) {
            $('.warning-email').html("* Input Your Email");
        } else {
            $('.warning-email').html("");
        }
        if ($('#email').change(function () {
                if ($('#email').val().length > 0) {
                    $('.warning-email').html("");
                }
            }));

        if (phone == 0) {
            $('.warning-phone').html("* Input Your Phone Number");
        } else {
            $('.warning-phone').html("");
        }
        if ($('#phone').change(function () {
                if ($('#phone').val().length > 0) {
                    $('.warning-phone').html("");
                }
            }));
        else {
            $('.warning-phone').html("* Input Your Phone Number");
        }
        if (message == 0) {
            $('.warning-message').html("* Input Your Message Text");
        } else {
            $('.warning-message').html("");
        }
        if ($('#message').change(function () {
                if ($('#message').val().length > 0) {
                    $('.warning-message').html("");
                }
            }));
    });
});