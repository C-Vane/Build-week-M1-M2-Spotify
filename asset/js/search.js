import fetchMusic from './index.js';
const find = (query) => {
  return document.querySelector(query);
};
const searchResult = find('.search__result');

// imgUrl = el.album.images[0].url
// title = el.name
// preview = el.preview_url
console.log('Search page');
const searchMusic = (query) => {
  let card = '';
  fetchMusic(query, (data) => {
    data.tracks.items.forEach(({ album, name, preview_url }) => {
      card += `<div class="col col-sm-6 col-md-4 col-lg-2 p-0">
        <div class="composition m-1">
          <div class="image">
            <img src="${album.images[0].url}" alt="Error Occured">
            <div class="top-cover ">
              <a href="${preview_url}" class="layer text-white d-felx flex-column"><i class="fa fa-home"
                  aria-hidden="true"></i><span>${name}</span>
              </a>
            </div>
          </div>
        </div>
      </div>`;
    });
    console.log(card);
    searchResult.innerHTML = card;
  });
};
searchMusic('Every Body Knows');
