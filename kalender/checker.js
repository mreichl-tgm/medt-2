function checkAll() {
	checkEmail();
	checkPw();
	checkDatePicker();
}

var email1 = document.getElementsByName("email").value;
var email2 = document.getElementsByName("emailWiederholen").value;

function checkEmail()
{
  if (email1 != email2) {
	alert("Emails nicht ident!");
	document.getElementsByName("email").focus();
  }
}

var password1 = document.getElementsByName("passwort").value;
var password2 = document.getElementsByName("passwortWiederholen").value;

function checkPw()
{  
  if (password1 != password2) {
	alert("Passwörter nicht ident!");
	document.getElementsByName("passwort").focus();
  }
}

function checkDatePicker() 
{
	//Später einfügen
}