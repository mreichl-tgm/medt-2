var email1 = document.Formular.email.value;
var email2 = document.Formular.emailWiederholen.value;

function checkEmail()
{
  if (email1 != email2) {
    alert("Emails nicht ident!");
    document.Formular.email.focus();
  }
}

var password1 = document.Formular.passwort.value;
var password2 = document.Formular.passwortWiederholen.value;

function checkPw()
{  
  if (password1 != password2) {
    alert("Passwörter nicht ident!");
    document.Formular.passwort.focus();
  }
}