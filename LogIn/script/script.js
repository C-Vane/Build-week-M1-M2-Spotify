const IsThisAnEmail = (S) => {
  let index_found_at, index_found_dot;
  //check if the string exists
  if (S !== "undefined") {
    index_found_at = S.search("@");

    // Find the "@"
    if (index_found_at > -1) {
      //Check if there is only one "@" and if there is a "." after 3 char after "@"
      if (S.includes("@", index_found_at + 1) !== true && S.includes(".", S.indexOf("@") + 3) === true) {
        index_found_dot = S.indexOf(".", index_found_at);
        //Check if there is only 1 "." after "@" and if the given string doesn't start or end with "@" and/or "."
        if (S.includes(".", index_found_dot + 1) !== true && (S.startsWith(".") || S.startsWith("@") || S.endsWith(".") || S.endsWith("@")) !== true) return true;
      }
    }
  }
  return false;
};
const email = document.getElementById("email");
const password = document.getElementById("password");
const emaildiv = email.parentNode;

const validateEmail = () => {
  if (!IsThisAnEmail(email.value)) {
    email.classList.add("haserrorborder");
    emaildiv.classList.add("haserror");
    return false;
  } else {
    email.classList.remove("haserrorborder");
    emaildiv.classList.remove("haserror");
    return true;
  }
};
const user = ["vanebrunocattabiani@gmail.com"];
const given_password = ["strive123"];
user.push(localStorage.getItem("email"));
given_password.push(localStorage.getItem("password"));
console.log(user, given_password);

const matchEmail = () => {
  const email = document.getElementById("email");
  const email_confirm = document.getElementById("email2");
  console.log(email_confirm.value);

  if (email.value !== email_confirm.value) {
    email_confirm.classList.add("haserrorborder");
    email_confirm.parentElement.classList.add("notthesame");
  } else {
    email_confirm.classList.remove("haserrorborder");
    email_confirm.parentElement.classList.remove("notthesame");
  }
};
const checkEmail = () => {
  for (i = 0; i < user.length; i++) {
    console.log(given_password[i], password.value);
    if (email.value === user[i] && given_password[i] === password.value) return true;
  }
};

const logIn = () => {
  console.log(validateEmail(), checkEmail());
  if (validateEmail() && checkEmail()) {
    window.open("../Home/Home2.html");
  } else {
    email.classList.add("haserrorborder");
    password.classList.add("haserrorborder");
    emaildiv.classList.add("haserror");
  }
};

const signIn = () => {
  const inputs = document.querySelectorAll("[required]");
  let i = 0;
  inputs.forEach((element) => {
    if (element.value === "") {
      i = 1;
    }
  });
  if (i === 0) {
    localStorage.setItem("password", password.value);
    localStorage.setItem("email", email.value);
    window.open("../Home/Home2.html");
  } else return alert("Fill in the form");
};

/****GOOGLE LOG IN
let googleUser = {};
let startApp = function () {
  gapi.load("auth2", function () {
    // Retrieve the singleton for the GoogleAuth library and set up the client.
    auth2 = gapi.auth2.init({
      client_id: "78495762108-mjj5s44emgdfk1vqupdph0rotrk3vfuc.apps.googleusercontent.com",
      cookiepolicy: "single_host_origin",
      // Request scopes in addition to 'profile' and 'email'
      //scope: 'additional_scope'
    });
    attachSignin(document.getElementById("googlelogin"));
  });
};
startApp();
function attachSignin(element) {
  console.log(element.id);
  auth2.attachClickHandler(
    element,
    {},
    function (googleUser) {
      document.getElementById("name").innerText = "Signed in: " + googleUser.getBasicProfile().getName();
    },
    function (error) {
      alert(JSON.stringify(error, undefined, 2));
    }
  );
}
function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log("ID: " + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log("Name: " + profile.getName());
  console.log("Image URL: " + profile.getImageUrl());
  console.log("Email: " + profile.getEmail()); // This is null if the 'email' scope is not present.
} */
