function validation() {
  var email = document.getElementById("email").value;
  var pass = document.getElementById("pass").value;
  var username = document.getElementById("username").value;

  if (username.length < 2) {
    document.getElementById("usernamer").innerHTML =
      "username Name must be Valid";
  }
  if (pass == "") {
    document.getElementById("pass").innerHTML = "Password is missing";
  } else {
    console.log("error");
  }
  if (pass.search(/[0-9]/ == -1)) {
    document.getElementById("pass").innerHTML =
      "Password must be contain a number";
  } else {
    console.log("error");
  }
  if (pass.search(/[a-z]/ == -1)) {
    document.getElementById("pass").innerHTML =
      "Password must be contain a Lower case character";
  } else {
    console.log("error");
  }
  if (pass.search(/[A-Z]/ == -1)) {
    document.getElementById("pass").innerHTML =
      "Password must be contain a Upper case character";
  } else {
    console.log("error");
  }
  if (pass.length < 8) {
    document.getElementById("pass").innerHTML =
      "Password must be of 8 character";
  } else {
    console.log("error");
  }
  if (email == "") {
    document.getElementById("email").innerHTML = "Email is missing";
  } else {
    console.log("error");
  }

  if (email.indexOf("@") == -1) {
    document.getElementById("email").innerHTML =
      "Email must be contain @ character";
  }

  if (email.indexOf(".") == -1) {
    document.getElementById("email").innerHTML =
      "Email must be contain . character";
  }

  console.log("clicking is working");
}
