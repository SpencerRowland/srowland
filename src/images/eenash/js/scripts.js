jQuery(document).ready(function() {
    
    /*
    Contact form
    */
    $('.contact-details-right form input[type="text"], .contact-details-right form input[type="email"], .contact-details-right form textarea').on('focus', function() {
        $('.contact-details-right form input[type="text"], .contact-details-right form input[type="email"], .contact-details-right form textarea').removeClass('input-error');
    });
    $('.contact-details-right form').submit(function(e) {
        e.preventDefault();
        $('.contact-details-right form input[type="text"], .contact-details-right form input[type="email"], .contact-details-right form textarea').removeClass('input-error');
        var postdata = $('.contact-details-right form').serialize();
        $.ajax({
            type: 'POST',
            url: 'php/process.php',
            data: postdata,
            dataType: 'json',
            success: function(json) {
                if(json.nameMessage != '') {
                    $('.contact-details-right form .contact-name').addClass('input-error');
                }
                if(json.emailMessage != '') {
                    $('.contact-details-right form .contact-email').addClass('input-error');
                }
                if(json.messageMessage != '') {
                    $('.contact-details-right form textarea').addClass('input-error');
                }
                if(json.nameMessage == '' && json.emailMessage == '' && json.messageMessage == '') {
                    $('.contact-details-right form').fadeOut('fast', function() {
                        $('.contact-details-right').append('<p>Thanks for contacting us! We will get back to you very soon.</p>');
                    });
                }
            }
        });
    });
     
});