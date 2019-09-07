//form validation
function Validation(){
	var fname=document.getElementById("fname").value;
	var email=document.getElementById("email").value;
	var phone=document.getElementById("phone").value;
	var message=document.getElementById("textarea").value;
	var errormessage=document.getElementById("errormessage");

    errormessage.style.padding="5px";
    if(fname.length<5){
        text="Please enter valid name";
        errormessage.innerHTML=text;
        return false;
    }
    if(email.indexOf("@")==-1 || email.length<5){
        text="Invalid E-mail";
        errormessage.innerHTML=text;
        return false;
    }
    if(isNaN(phone) || phone.length!=10){
        text="Incorrect Mobile Number";
        errormessage.innerHTML=text;
        return false;
    }
    if(message.length<5){
        text="Enter a Valid Message";
        errormessage.innerHTML=text;
        return false;
    }
    
    return true;
  
}