import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);
  let [results, setRestults] = useState(null);

  function handleWordSearch(event) {
    setKeyword(event.target.value);
  }
  function handleResponse(response) {
    setRestults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;

    axios.get(apiUrl).then(handleResponse);
  }

  return (
    <div className="Dictionary">
      <section>
        <form onSubmit={search}>
          <input
            type="search"
            placeholder="Search for a word..."
            onChange={handleWordSearch}
          />
        </form>
      </section>
      <Results results={results} />
    </div>
  );
}
