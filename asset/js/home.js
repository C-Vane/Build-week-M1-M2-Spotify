import fetchMusic from "./index.js";
const find = (query) => {
  return document.querySelector(query);
};

const page_number = [find("#home__section_one"), find("#home__section_two"), find("#home_page_two"), find("#home_page_three"), find("#home_page_four"), find("#home_page_five")];
const setAlbum = (endpoint) => {
  fetchMusic(null, endpoint, (data) => {
    let min, max;
    min = 0;
    max = 7;
    for (let i = 0; i < page_number.length; i++) {
      if (i === 1) max -= 1;
      let card = data.items.reduce((acc, el, index) => {
        return index > min && index < max
          ? (acc += `<div class="col col-sm-12 col-md-4 col-lg-2 p-0">
        <div class="composition m-1">
          <div class="image">
            <img src="${el.images[0].url}" class="albumcover" alt="Error Occured">
            <div class="playbtns d-flex flex-row justify-content-around">
              <button class="btn btn-success"><a href='${el.external_urls.spotify}' class="fa fa-play text-decoration-none text-white"></a></button>
            </div>
          </div>
          <figcaption>${el.name}</figcaption>
        </div>
        </div> `)
          : acc;
      }, " ");
      if (max >= 19) {
        min = -5;
        max = 1;
      }
      min += 5;
      max += 5;

      page_number[i].innerHTML = card;
    }
  });
};

setAlbum("/me/playlists");
