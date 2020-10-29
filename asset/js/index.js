//End point for fetching music from Spotify
const endPoint = `https://api.spotify.com/v1`;

//Berier Token for Authorization
// If Token expired please get new one from https://developer.spotify.com/console/get-current-user-playlists/
const headers = {
  Authorization:
    "Bearer BQCwfQmvZaDsumPXPVCm15Rhfe8F9ObqERdeAuC2DAYEhhrbu6XnKV2unv-q5ulqrU5YpF1MJDzwYqt5tCdlqtx3X31jCy2p1YLnk9G9B9rHvtPwepCDPJRrTfRsZplqz-Q0vC0M3Nu6IIRFig6n2aceLhHt_kt9V244zmBfrlsA3M9bjyQqQjp0v6I7lt7AkWhhSVYhxhxA4Q",
  "Content-Type": "application/x-www-form-urlencoded",
  Accept: " application / json",
};

const fetchMusic = (query, endp, cb) => {
  let url = `${endPoint}${endp}`;
  if (query !== null) {
    const unifiedQuery = query.replace(" ", "%20");
    console.log();
    url = `${endPoint}/search?query=${query}&type=track&offset=0&limit=20`;
  }

  fetch(url, {
    method: "GET",
    headers,
  })
    .then((res) => res.json())
    .then((data) => {
      cb(data);
    })

    .catch((err) => console.log(err));
};

export default fetchMusic;

// curl -H 'Content-Type: application/x-www-form-urlencoded' \
// -d 'grant_type=refresh_token' \
// -d 'refresh_token=BQBD_3im8OxXHbjYJG_tARMk3m9tceCDY85bkSXLturm-i60-RWY8fZKjHC3FDYOblUkar3w2hgKmS6U3kPwCw3IRi8qwmPAz-zML3jLd1pVl69BNBi4k_G6E1nQcQQezAubSRR8sc2Gcp0aUWKEcVNJXpbpCosj1Q1oGlQu0WBv' \
// -d 'client_id=db8445cb9d4c4746a8a8c8ba2ce4a861' https://accounts.spotify.com/api/token
