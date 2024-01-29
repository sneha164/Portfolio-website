function validate(){
	var name = document.getElementByID("name").value;
	var subject = document.getElementByID("subject").value;
	var phone = document.getElementByID("phone").value;
	var email = document.getElementByID("email").value;
	var message = document.getElementByID("message").value;
	var error_message = document.getElementByID("error_message");
	// Function is called

	error_message.style.padding = "10px";

	var text;
	if(name.length < 5){
	  text ="Please Enter Valid Name";
	  error_message.innerHTML = text;
	  return false;
	  // The function returns the value
	}
	if(subject.length < 10){
	  text = "Please Enter Correct subject";
	  error_message.innerHTML = text;
	  return false;
	  // The function returns the value
	}
	if(isNaN(phone) || phone.length |= 10){
	  text = "Please Enter Valid Phone Number";
	  error_message.innerHTML = text;
	  return false;
	  // The function returns the value
	}
	if(email.indexof("@") == -1 || email.length < 6){
	  text = "Please Enter Valid Email";
	  error_message.innerHTML = text;
	  return false;
	  // The function returns the value
	}
	if(message.length <= 20){
	  text = "Please Enter More Than 20 Characters";
	  error_message.innerHTML = text;
	  return false;
	  // The function returns the value
	}
	alert("Form Submitted Sucessfully!");
	return true;
	 // The function returns the submission value
}
