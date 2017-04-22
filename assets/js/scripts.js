/**	 AJAX - CONTACT
 *****************************************************/
 $(document).ready( function(){

	$('.contact-form').submit(function() {

	        $('.contact-form label .status').remove();
			$('#contact .contact-form.error input,#contact .contact-form.error textarea').removeClass("active");

			var postdata = $('.contact-form').serialize();

			$.ajax({
				type: 'POST',
				url: 'assets/sendmail.php',
				data: postdata,
				dataType: 'json',
				success: function(json) {
					if(json.nameMessage !== '') {

						$('#contact .contact-form #name').addClass("active").attr("placeholder",json.nameMessage);
						$('.contact-form').addClass("error");

					}
					if(json.emailMessage !== '') {

						$('#contact .contact-form #email').addClass("active").attr("placeholder",json.emailMessage);
						$('.contact-form').addClass("error");

					}
					if(json.messageMessage !== '') {

						$('#contact .contact-form #message').addClass("active").attr("placeholder",json.messageMessage);
						$('.contact-form').addClass("error");

					}
					if(json.nameMessage === '' && json.emailMessage === '' && json.messageMessage === '') {

						$('.contact-form').removeClass("error").addClass("success");
						$('#contact .contact-form #message,#contact .contact-form #email,#contact .contact-form #name').attr("placeholder","");
						$('#contact .contact-form #message').attr("placeholder",json.succes);
						$('.contact-form input,.contact-form button,.contact-form textarea').val('').prop('disabled', true);

					}
				}
			});
			return false;
		});

});

$(document).ready(
  function() {
    $('#email2').hide()
  }
);
