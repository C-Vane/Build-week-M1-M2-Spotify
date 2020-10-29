/* window.onscroll = function () {
  myFunction();
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
 */

const page = (section, color) => {
  let i, tabcontent;
  tabcontent = document.getElementsByClassName("page");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
    document.getElementById("content").classList.remove("orange", "red", "blue", "green", "violet");
  }

  document.getElementById(section).style.display = "block";
  document.getElementById("content").classList.add(color);
};

document.getElementById("defaultopen").click();
let count = true;
const changetext = (elem) => {
  if (count) {
    elem.innerText = "SHOW LESS";
    count = false;
  } else {
    elem.innerText = "SEE MORE";
    count = true;
  }
};
