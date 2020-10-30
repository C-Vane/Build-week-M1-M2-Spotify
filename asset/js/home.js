import fetchMusic from "./index.js";
const find = (query) => {
  return document.querySelector(query);
};
const homeFirstSection = find("#home__section_one");
const homeSecondSection = find("#home__section_two");
const homepageTwo = find("#home_page_two");
const homepageThree = find("#home_page_three");
const homepageFour = find("#home_page_four");
const homepageFive = find("#home_page_five");

// const res = {};
// res['name'] = el.name;
// res['imgUrl'] = el.images[0].url;
// res['url'] = el.external_urls.spotify;

fetchMusic(null, "/me/playlists", (data) => {
  let card = data.items.reduce((acc, el, index) => {
    return index < 6
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

  homeFirstSection.innerHTML = card;
});

fetchMusic(null, "/me/playlists", (data) => {
  console.log(data);
  let card = data.items.reduce((acc, el, index) => {
    console.log("index");
    return index > 5 && index < 10
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
  homeSecondSection.innerHTML = card;
});

fetchMusic(null, "/me/following", (data) => {
  console.log(data);
  let card = data.items.reduce((acc, el, index) => {
    console.log("index");
    return index < 10
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
  homepageTwo.innerHTML = card;
});
