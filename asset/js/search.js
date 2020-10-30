import fetchMusic from './index.js';
const find = (query) => {
  return document.querySelector(query);
};
const searchResult = find('.search__result');

// imgUrl = el.album.images[0].url
// title = el.name
// preview = el.preview_url

const searchMusic = (query) => {
  let card = '';
  fetchMusic(query, '20', (data) => {
    if (data) {
      data.tracks.items.forEach(({ album, name, preview_url }) => {
        card += `<div class="col col-sm-6 col-md-4 col-lg-2 p-0">
          <div class="composition m-1">
            <div class="image">
              <img src="${album.images[0].url}" alt="Error Occured">
              <div class="top-cover ">
                <a href="${preview_url}" class="layer text-white d-flex flex-column text-center"><span>${name}</span>
                </a>
              </div>
            </div>
          </div>
        </div>`;
      });
      searchResult.innerHTML = card;
    } else {
      alert('Connection to Failed');
    }
  });
};

// Here is the solution. Executing a function after the user has stopped typing for a specified amount of time:
var delay = (function () {
  var timer = 0;
  return function (callback, ms) {
    clearTimeout(timer);
    timer = setTimeout(callback, ms);
  };
})();

$('#topsearch').keyup(function () {
  delay(function () {
    const value = $('#topsearch').val();
    if (value) {
      searchMusic(value);
    }
  }, 800);
});

$(document).ready(searchMusic('Every Body Knows'));
