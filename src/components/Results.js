import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h2>{props.results.word}</h2>

        {props.results.phonetics.map(function (phonetic, idx) {
          return (
            <div key={idx}>
              <Phonetics phonetic={phonetic} />
            </div>
          );
        })}
        {props.results.meanings.map(function (meanings, idx) {
          return (
            <div key={idx}>
              <Meaning meaning={meanings} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
