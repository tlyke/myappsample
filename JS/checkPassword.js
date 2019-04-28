/*
sources:
https://keithscode.com/tutorials/javascript/3-a-simple-javascript-password-validator.html
*/
function checkPass()
{
	var submitButton = document.getElementById('submit');
    //Store the password field objects into variables ...
    var pass1 = document.getElementById('pass1');
    var pass2 = document.getElementById('pass2');
    //Store the Confimation Message Object ...
    var message = document.getElementById('confirmMessage');
    //Set the colors we will be using ...
    var goodColor = "#66cc66";
    var badColor = "#ff6666";
	
    //Compare the values in the password field 
    //and the confirmation field
    if(pass1.value == pass2.value){
        //The passwords match. 
        //Set the color to the good color and inform
        //the user that they have entered the correct password 
        pass2.style.backgroundColor = goodColor;
        message.style.color = goodColor;
        message.innerHTML = "Passwords Match!";
		if(checkPassValid()){
			submitButton.disabled = false;
		}	
		
    }else{
        //The passwords do not match.
        //Set the color to the bad color and
        //notify the user.
        pass2.style.backgroundColor = badColor;
        message.style.color = badColor;
        message.innerHTML = "Passwords Do Not Match!";
		submitButton.disabled = true;
    }
}  
function checkPassValid()
{
	var submitButton = document.getElementById('submit');
    //Store the password field objects into variables ...
    var pass1 = document.getElementById('pass1');
    //Store the Confimation Message Object ...
    var message = document.getElementById('validMessage');
    //Set the colors we will be using ...
    var goodColor = "#66cc66";
    var badColor = "#ff6666";
	
    //Compare the values in the password field 
    //and the confirmation field
    if(pass1.value.length > 7 && hasUpperCase(pass1.value) && hasLowerCase(pass1.value) && (/[0-9]/.test(pass1.value)) && !(/^[a-zA-Z0-9]*$/.test(pass1.value))){
        //The passwords match. 
        //Set the color to the good color and inform
        //the user that they have entered the correct password 
        pass1.style.backgroundColor = goodColor;
        message.style.color = goodColor;
        message.innerHTML = "Password is strong!";
		submitButton.disabled = false;
		return true;
    }else{
        //The passwords do not match.
        //Set the color to the bad color and
        //notify the user.
        pass1.style.backgroundColor = badColor;
        message.style.color = badColor;
        message.innerHTML = "Password is weak!";
		submitButton.disabled = true;
		return false;
    }
} 
function hasLowerCase(str) {
    return str.toUpperCase() != str;
}
function hasUpperCase(str) {
    return str.toLowerCase() != str;
}