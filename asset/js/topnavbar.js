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

const playMusic = () => {
  window.open("/Album/Album.html");
};

const toAlbum = () => {
  window.open("/Album/Album.html");
};
