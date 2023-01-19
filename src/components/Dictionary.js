import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setRestults] = useState(null);

  let [loaded, setLoaded] = useState(false);

  function handleWordSearch(event) {
    setKeyword(event.target.value);
  }
  function handleResponse(response) {
    setRestults(response.data[0]);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;

    axios.get(apiUrl).then(handleResponse);
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
        <section>
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
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
