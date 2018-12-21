function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  var user = getCookie("username");
  if (user != "") {
    alert("Welcome Again " + user);
  } else {
    user = prompt("Please enter your name:", "");
    if (user != "" && user != null) {
      setCookie("username", user, 30);
    }
  }
}





// Form validation code will come here.
function validate() {

  if (document.contactform.fname.value == "") {
    alert("Please provide your First Name!");
    document.contactform.fname.focus();
    return false;
  }
  if (document.contactform.lname.value == "") {
    alert("Please provide Last Name!");
    document.contactform.lname.focus();
    return false;
  }
  if (document.contactform.email.value == "") {
    alert("Please Provide a relevant Email");
    document.contactform.email.focus();
    return false;
  }
  if (document.contactform.subject.value == "") {
    alert("Please provide your query here!");
    document.contactform.subject.focus();
    return false;
  }
  return (true);
}

function save() {
  if (validate()) {
    var fieldValue1 = document.getElementById('fname').value;
    var fieldValue2 = document.getElementById('lname').value;
    var fieldValue3 = document.getElementById('email').value;
    var fieldValue4 = document.getElementById('subject').value;

    localStorage.setItem('fname', fieldValue1);
    localStorage.setItem('lname', fieldValue2);
    localStorage.setItem('email', fieldValue3);
    localStorage.setItem('subject', fieldValue4);
    alert("Thank you for visiting Astronomy Ireland! We have received your message and will get back to you shortly!")
  }
}
//-->

function regVal() {

  if (document.regform.Email1.value == "") {
    alert("Please provide your Email!");
    document.regform.Email1.focus();
    return false;
  }
  if (document.regform.psw.value == "") {
    alert("Please Enter A New Password!");
    document.regform.psw.focus();
    return false;
  }
  if (document.regform.pswrepeat.value == "" || document.regform.pswrepeat.value !== document.regform.psw.value) {
    alert("Password does not match. Try again!");
    document.regform.pswrepeat.focus();
    return false;
  }
  return (true);
}

function reg() {
  if (regVal()) {
    var fieldValue6 = document.getElementById('Email1').value;
    var fieldValue7 = document.getElementById('psw').value;
    var fieldValue8 = document.getElementById('pswrepeat').value;


    localStorage.setItem('Email1', fieldValue6);
    localStorage.setItem('psw', fieldValue7);
    localStorage.setItem('pswrepeat', fieldValue8);

    alert("Registration Complete! You are now a member of Astronomy Ireland!")
  }
}

//-->
var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
var imageObj = new Image();

imageObj.onload = function() {
  context.drawImage(imageObj, -25, -10);
};
imageObj.src = 'img/palette.svg';


//-->
