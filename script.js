function onClickMenu(){
	document.getElementById("menu").classList.toggle("change");
	document.getElementById("nav").classList.toggle("change");
	
	document.getElementById("menu-bg").classList.toggle("change-bg");
}

var templateParams = {
    name: 'James',
    notes: 'Check this out!'
};
 
emailjs.send('service_zxu7w58', 'template_ss7e9pp', templateParams)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
	
emailjs.sendForm('service_zxu7w58', 'template_ss7e9pp', 'quote')
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });