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

function sendContactForm() {
	emailjs.sendForm('service_zxu7w58', 'template_u7lixdq', '#contact')
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
	   alert('Message successfully sent! Please allow 3-5 days for a response.');
	   document.getElementById('contact').reset();
    }, function(error) {
       console.log('FAILED...', error);
	   alert('Message send failure. Please try again later.');
    });
}

function sendApplyForm() {
	emailjs.sendForm('service_zxu7w58', 'template_drg02gs', '#apply')
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
	   alert('Application successfully submitted! Please click the company name at the top of this page to return to the Home page.');
    }, function(error) {
       console.log('FAILED...', error);
	   alert('Application send failure. Please try again later.');
    });
}
