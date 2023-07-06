function validation() {
  var email = document.getElementById("email").value;
  var pass = document.getElementById("pass").value;
  if (pass == "") {
    document.getElementById("passs").innerHTML = "Password is missing";
  }

  if (email == "") {
    document.getElementById("email").innerHTML = "Email is missing";
  }

  if (email.indexOf("@") == -1) {
    document.getElementById("email").innerHTML =
      "Email must be contain @ character";
  }

  if (email.indexOf(".") == -1) {
    document.getElementById("email").innerHTML =
      "Email must be contain . character";
  }
  if (pass.length < 6) {
    document.getElementById("pass").innerHTML =
      "Password must be at least 8 characters";
  }
}
