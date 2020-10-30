import fetchMusic from "/asset/js/index.js";
const find = (query) => {
  return document.querySelector(query);
};

// window.onscroll = function () {
//   myFunction();
// };

// var navbar = document.getElementById('navbar');
// var sticky = navbar.offsetTop;

// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add('sticky');
//   } else {
//     navbar.classList.remove('sticky');
//   }
// }

//POPULATE MUSIC AND ALBUM
const page_number = [find("#popular"), find("#artistpick"), find("#popular"), find("#featuring"), find("#related"), find("#about")];
const setAlbum = (endpoint) => {
  let min = 0,
    max = 5;
  fetchMusic(null, endpoint, (data) => {
    console.log(data);
    //   for (let i = 1; i < 4; i++) {
    //     let card = data.items.reduce((acc, el, index) => {
    //       console(el);
    //       return index > min && index < max
    //         ? (acc += `  <div class="col-6 col-md-5 col-lg-3">
    //         <img src="${min}" onclick="toAlbum()" alt="album picture"
    //             class="albumcover mb-1">
    //         <div class="playbtns d-flex flex-row justify-content-around">
    //             <button class="btn btn-success"><a href="${max}" class="fa fa-play text-decoration-none text-white"></a></button>
    //         </div>
    //         <label>${index}</label>
    //         <small class="text-muted">Qween</small>
    //     </div> `)
    //         : acc;
    //     }, ' ');
    //     if (max >= 19) {
    //       min = -5;
    //       max = 1;
    //     }
    //     min += 4;
    //     max += 4;

    //     page_number[i].innerHTML = card;
    //   }
  });
};

// setAlbum('/artists/1dfeR4HaWDbWqFHLkxsg1d/albums');
const popularSection = document.querySelector(".popular__container");
const setPoularAlbom = () => {
  fetchMusic(null, "/artists/1dfeR4HaWDbWqFHLkxsg1d/albums", ({ items }) => {
    if (items) {
      let card = items.reduce((acc, { images, name, release_date, total_tracks }, index) => {
        return index <= 10 && index != 0
          ? (acc += `<div onclick="location.href='/Album/Album.html'" class="row">
          <div class="col-1">${index}</div>
          <div class="col-2"><img src="${images[0].url}" height="40px" width="40px" alt="" srcset="">
          </div>
          <div class="col-6">${name} -  Mix</div>
          <div id="dates" class="col-2">${release_date}</div>
          <div id="tracknum" class="col-1">${total_tracks}</div>
        </div>`)
          : acc;
      }, " ");
      popularSection.innerHTML = card;
    } else {
      alert("Connection to Failed");
    }
  });
};

const renderCard = (sec, arr) => {
  let card = arr.reduce((acc, { images, name, external_urls }, index) => {
    return index <= 3
      ? (acc += `<div class="col-6 col-md-5 col-lg-3 mb-5">
        <img src="${images[0].url}" height="100%" onclick="location.href='/Album/Album.html'" alt="album picture"
          class="albumcover mb-1">
        <div class="playbtns d-flex flex-row justify-content-around">
          <button class="btn btn-success"><i class="fa fa-play"></i></button>
        </div>
        <label>${name}</label>
        <small class="text-muted">Qween</small>
      </div>`)
      : acc;
  }, " ");
  sec.innerHTML = card;
};

const artistpickSection = document.querySelector("#artistpick");
const releasesContainer = document.querySelector(".releases__container");
const featureContainer = document.querySelector(".feature__container");
const setArtist = () => {
  fetchMusic(null, "/artists/4tZwfgrHOc3mvqYlEYSvVi/related-artists", ({ artists }) => {
    if (artists) {
      renderCard(artistpickSection, artists.slice(0, 4));
      renderCard(releasesContainer, artists.slice(4, 8));
      renderCard(featureContainer, artists.slice(8, 12));

      let card = artists.reduce((acc, { images }, index) => {
        return index <= 12
          ? (acc += `<div class="col-6 col-md-5 col-lg-4 my-2">
            <img src="${images[0].url}" height="100%" alt="album picture" class="albumcover mb-1">
            <div class="playbtns d-flex flex-row justify-content-between">
              <button class="btn"><i class="fa fa-heart-o" aria-hidden="true"></i></button>
              <button class="btn more"><i class="fa fa-play"></i></button>
              <button class="btn">...</button>
            </div>
          </div>`)
          : acc;
      }, " ");
      document.querySelector(".related__artists").innerHTML = card;
    } else {
      alert("Connection to Failed");
    }
  });
};

setPoularAlbom();
setArtist();
