import React, { useState } from "react";
import axios from "axios";
import Photos from "./Photos";
import Results from "./Results";

import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setRestults] = useState(null);

  let [loaded, setLoaded] = useState(false);

  let [photos, setPhotos] = useState(null);

  function handleWordSearch(event) {
    setKeyword(event.target.value);
  }
  function handleResponse(response) {
    setRestults(response.data[0]);
  }

  function handlePexelResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;

    axios.get(apiUrl).then(handleResponse);

    const pexelApiKey = `3w0eUBHj0vptXWnpM70M1DQn2olO7HPRMesfNkw1nR2ACi2G1GZm3mMU`;

    const pexelApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;

    let headers = { Authorization: `Bearer ${pexelApiKey}` };
    axios.get(pexelApiUrl, { headers: headers }).then(handlePexelResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section className="banner">
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Type a word ..."
              onChange={handleWordSearch}
            />
          </form>
          <div className="inspo">
            <p>try...poppy, mirror, home, friend...</p>
          </div>
        </section>
        <Photos photos={photos} />

        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
