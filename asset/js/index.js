//End point for fetching music from Spotify
const endPoint = `https://api.spotify.com/v1`;

//Berier Token for Authorization
// If Token expired please get new one from https://developer.spotify.com/console/get-current-user-playlists/
const headers = {
  Authorization: "Bearer BQBbteM7S-l1c9sKdZUToMi0I7n3oDEIeHsZl_66qp5B8Dpa0QCC_gFtbbFfimgyC24LHIjs-0XHf28yBaCkENdAFq-oduXpJByIuMG0RNVbI7B6_K1CoXE9jTEAdmhj7mREPluOhkdwWYDmPvvrW-mBGRc0VTWkqjQOXb4Zmf0a",
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

    .catch((err) => console.log(err));
};

export default fetchMusic;

// curl -H 'Content-Type: application/x-www-form-urlencoded' \
// -d 'grant_type=refresh_token' \
// -d 'refresh_token=BQBD_3im8OxXHbjYJG_tARMk3m9tceCDY85bkSXLturm-i60-RWY8fZKjHC3FDYOblUkar3w2hgKmS6U3kPwCw3IRi8qwmPAz-zML3jLd1pVl69BNBi4k_G6E1nQcQQezAubSRR8sc2Gcp0aUWKEcVNJXpbpCosj1Q1oGlQu0WBv' \
// -d 'client_id=db8445cb9d4c4746a8a8c8ba2ce4a861' https://accounts.spotify.com/api/token
