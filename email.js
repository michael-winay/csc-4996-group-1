emailjs.init("JyU8W133iNLNxevO1");
	
function sendQuoteForm() {
	emailjs.sendForm('service_zxu7w58', 'template_ss7e9pp', '#quote')
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
	   alert('Quote request successfully sent! Please allow 3-5 days for a response.');
	   document.getElementById('quote').reset();
    }, function(error) {
       console.log('FAILED...', error);
	   alert('Message send failure. Please try again later.');
    });
}

function sendApplyForm() {
	emailjs.sendForm('service_zxu7w58', 'apply_template_id_here', '#form ID here')
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
	   alert('Application successfully submitted!');
    }, function(error) {
       console.log('FAILED...', error);
	   alert('Application send failure. Please try again later.');
    });
}