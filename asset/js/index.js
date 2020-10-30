//End point for fetching music from Spotify
const endPoint = `https://api.spotify.com/v1`;

//Berier Token for Authorization
// If Token expired please get new one from https://developer.spotify.com/console/get-current-user-playlists/
const headers = {
  Authorization:
    "Bearer BQDpDC-AywmHPqfl_BK6E2C0EYvO85leNURM6o24qRjGYxK2vp1WN-Q8EZRcoWD5tN3umHjsVdpg2kVLH5SZra_GOYvIUI9yQe9alIOQPd7Pk536jvI0dljBpK-zIkhVcA8nI9DVJ3mptATw1H9d06ZJsZ__a3U0yl19Y4ZPk78itVqnR-egVKoNubF2Vr-8JlaPGKxQhVhKiNCS92N0fhMHYCQ",
  "Content-Type": "application/x-www-form-urlencoded",
  Accept: " application / json",
};

const fetchMusic = (query, endp, cb) => {
  let url = `${endPoint}${endp}`;
  if (query !== null) {
    const unifiedQuery = query.replace(" ", "%20");
    url = `${endPoint}/search?query=${query}&type=track&offset=0&limit=${endp}`;
  }

  fetch(url, {
    method: "GET",
    headers,
  })
    .then((res) => res.json())
    .then((data) => {
      cb(data);
    })

    .catch((err) => alert("Token expired, please refresh it manually! "));
};

export default fetchMusic;

// curl -H 'Content-Type: application/x-www-form-urlencoded' \
// -d 'grant_type=refresh_token' \
// -d 'refresh_token=BQBD_3im8OxXHbjYJG_tARMk3m9tceCDY85bkSXLturm-i60-RWY8fZKjHC3FDYOblUkar3w2hgKmS6U3kPwCw3IRi8qwmPAz-zML3jLd1pVl69BNBi4k_G6E1nQcQQezAubSRR8sc2Gcp0aUWKEcVNJXpbpCosj1Q1oGlQu0WBv' \
// -d 'client_id=db8445cb9d4c4746a8a8c8ba2ce4a861' https://accounts.spotify.com/api/token
