emailjs.init("JyU8W133iNLNxevO1");
	
function sendQuoteForm() {

    //Formatting
var em = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var lamb = /^[a-zA-Z0-9 \.-]*$/;
var last = /^[A-Za-z, ,-]+$/;
var numsp = /^[0-9 ]*$/;
var fulladd = /^[a-zA-z0-9 \,]*$/gm;

//Variables
let quo = document.getElementById("comname").value;
let quo2 = document.getElementById("comcontact").value;
let quo3 = document.getElementById("comemail").value;
let quo4 = document.getElementById("comphone").value;
let quo5 = document.getElementById("mcnum").value;
let quo6 = document.getElementById("pickup").value;
let quo7 = document.getElementById("dropoff").value;

if(quo == "" || quo2 == "" || quo3 == "" || quo4 == "" || quo5 == "" || quo6 == "" || quo7 == "")
{
    alert("Please input a Value");
    return false;
}
else
{
    if(quo.match(lamb))
    {
        if(quo2.match(last))
        {
            if(quo3.match(em))
            {
               if(quo4.match(numsp))
               {
                   if(quo5.match(numsp))
                   {
                       if(quo6.match(fulladd))
                       {
                           if(quo7.match(fulladd))
                           {
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
                           else
                           {
                              alert("The drop off location contains unaccepted characters.");
                              return false;
                           }
                       }
                       else
                       {
                          alert("The pickup location contains unaccepted characters.");
                          return false;
                       }
                   }
                   else
                   {
                      alert("The motor carrier number contains unaccepted characters.");
                      return false;
                   }
               }
               else
               {
                alert("The company phone contains unaccepted characters.");
                return false;
               }
            }
            else
            {
              alert("The company email contains unaccepted characters or is in the improper format.");
              return false;
            }
        }
        else
        {
          alert("The company contact contains unaccepted characters.");
          return false;
        }
    }
    else
    {
      alert("The company name contains unaccepted characters.");
      return false;
    }
}
}

function sendContactForm() {
    /*
	emailjs.sendForm('service_zxu7w58', 'template_u7lixdq', '#contact')
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
	   alert('Message successfully sent! Please allow 3-5 days for a response.');
	   document.getElementById('contact').reset();
    }, function(error) {
       console.log('FAILED...', error);
	   alert('Message send failure. Please try again later.');
    });*/

    //Formatting
var em = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var lamb = /^[a-zA-Z0-9 \.-\?]*$/;
var last = /^[A-Za-z, ,-]+$/;


//Variables
let con = document.getElementById("email").value;
let con2 = document.getElementById("fname").value;
let con3 = document.getElementById("lname").value;
let con4 = document.getElementById("country").value;
let con5 = document.getElementById("subject").value;

if(con == "" || con2 == "" || con3 == "" || con4 == "" || con5 == "")
{
  alert("Please input a Value");
  return false;
}
else
{
    if(con.match(em))
    {
       if(con2.match(last))
       {
           if(con3.match(last))
           {
              if(con5.match(lamb))
              {
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
              else
              {
                alert("The subject contains unaccepted characters.");
                return false;
              }
           }
           else
           {
              alert("The second name contains unaccepted characters.");
              return false;
           }
       }
       else
       {
         alert("The first name contains unaccepted characters.");
         return false;
       }
    }
    else
    {
      alert("The company email contains unaccepted characters or is in the improper format.");
      return false;
    }
}
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
