//print error
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
   
}
//form validation
function Validation(){
	var fname=document.getElementById("fname").value;
	var email=document.getElementById("email").value;
	var phone=document.getElementById("phone").value;
	var message=document.getElementById("textarea").value;
    // var errormessage=document.getElementById("errormessage");
 
    // errormessage.style.padding="5px";
    // if((fname.length<5) || (email.indexOf("@")==-1 || email.length<5) || (isNaN(phone) || phone.length!=10) || (message.length<5)){
    //     text="Please provide us proper credentials"
    //     errormessage.innerHTML=text;
    //     count=0;
    //     return false;
    // }
    if(fname.length<2){
        printError("nameerr","Please enter a valid name(min-length:2)*");   
        fname=false;    
    }else{
        printError("nameerr","");
    }

    if(email.indexOf("@")==-1 || email.length<5){
        printError("emailerr","Invalid E-mail*");
        email=false;
    }else{
        printError("emailerr","");
    }
    if(isNaN(phone) || phone.length!=10){
        printError("phoneerr","Enter 10 digit mobile number*");
        phone=false;
    }else{
        printError("phoneerr","");
    }
    if(message.length<5){
        printError("messageerr","Enter a Valid Message more than 5 letters*");
        message=false;
    }else{
        printError("messageerr","");
    }

    if((fname && email && phone && message) == false){
        return false;
    }
    else{
        //reference messages collections
        
        
        function saveMessage(fname,email,phone,message){
            var newMessageRef=messageRef.push();
                newMessageRef.set({
                Fullname:fname,
                Email:email,
                Mobile:phone,
                Message:message
            });
        }
            saveMessage(fname,email,phone,message);
            //show alert
            document.querySelector('.alert').style.display='block';
            // document.querySelector('#errormessage').style.display='none';
            ///hiding alert after 2sec
            setTimeout(function(){
                document.querySelector('.alert').style.display='none';
            },3000);
            //remove old content
            document.getElementById('contactform').reset();
            
    }
    
    return true;
}
