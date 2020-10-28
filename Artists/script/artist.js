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

const show = (section, color) => {
  let i, tabcontent;
  tabcontent = document.getElementsByClassName("show");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  document.getElementById(section).style.display = "block";
  //elmnt.style.backgroundColor = color;
};

document.getElementById("defaultopen").click();
