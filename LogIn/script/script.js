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
const validateEmail = () => {
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const emaildiv = email.parentNode;
  if (!IsThisAnEmail(email.value)) {
    email.classList.add("haserrorborder");
    emaildiv.classList.add("haserror");
    email.value = "";
    password.value = "";
  } else {
    window.location.href = "Home/home.html";
  }
};
