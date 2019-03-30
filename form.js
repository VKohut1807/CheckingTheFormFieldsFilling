"use strict"

function valid(form){
	var fail = false;
	var name = form.name.value;
	var email = form.email.value;
	var password = form.password.value;
	var repassword = form.repassword.value;
	var state = form.state.value;
	var check = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	if (name == "" || name == " ") {
		fail = "Please write your name";
	}else if (email == "") {
		fail = "Please write your email";
	}else if (check.test(email) == false) {
		fail = "Please check the correct email";
	}else if (password == "") {
		fail = "Please write your password";
	}else if (password != repassword) {
		fail = "Your write different password";
	}else if (state == "") {
		fail = "Please Select Your Gender";
	}
	if (fail) {
		alert(fail);
	}else {
		window.location = "https://github.com/VKohut1807";
	}
}