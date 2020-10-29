import fetchMusic from './index.js';
const find = (query) => {
  return document.querySelector(query);
};
const homeFirstSection = find('#home__section_one');

// const res = {};
// res['name'] = el.name;
// res['imgUrl'] = el.images[0].url;
// res['url'] = el.external_urls.spotify;

fetchMusic(null, (data) => {
  let card = data.items.reduce((acc, el, index) => {
    return index < 6
      ? (acc += `<div class="col col-sm-6 col-md-4 col-lg-2 p-0">
    <div class="composition m-1">
      <div class="image">
        <img src="${el.images[0].url}" class="albumcover" alt="Error Occured">
        <div class="playbtns d-flex flex-row justify-content-around">
          <button class="btn btn-success"><a href='${el.external_urls.spotify}' class="fa fa-play"></a></button>
        </div>
      </div>
      <figcaption>${el.name}</figcaption>
    </div>
    </div> `)
      : acc;
  }, ' ');

  homeFirstSection.innerHTML = card;
});
