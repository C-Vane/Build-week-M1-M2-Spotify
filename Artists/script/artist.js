
import fetchMusic from "/asset/index.js";
const find = (query) => {
  return document.querySelector(query);
};

/*window.onscroll = function () {
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

const playMusic = () => {
  window.open("/Album/Album.html");
};

const toAlbum = () => {
  window.open("/Album/Album.html");
};

//POPULATE MUSIC AND ALBUM
const page_number = [find("#popular"), find("#artistpick"), find("#popular"), find("#featuring"), find("#related"), find("#about")];
const setAlbum = (endpoint) => {
  let min=0, max=5;
  fetchMusic(null, endpoint, (data) => {
    for (let i = 1; i < 4; i++) {
      let card = data.items.reduce((acc, el, index) => {
        console(el);
        return index > min && index < max
          ? (acc += `  <div class="col-6 col-md-5 col-lg-3 mb-1">
          <img src="${}" onclick="toAlbum()" alt="album picture"
              class="albumcover mb-1">
          <div class="playbtns d-flex flex-row justify-content-around">
              <button class="btn btn-success"><a href="${}" class="fa fa-play text-decoration-none text-white"></a></button>
          </div>
          <label>${}</label>
          <small class="text-muted">Qween</small>
      </div> `)
          : acc;
      }, " ");
      if (max >= 19) {
        min = -5;
        max = 1;
      }
      min += 4;
      max += 4;

      page_number[i].innerHTML = card;
    }
  });
};

setAlbum("/artists/1dfeR4HaWDbWqFHLkxsg1d/albums");
