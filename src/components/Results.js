import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import "./Results.css";
export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h2>{props.results.word}</h2>

          {props.results.phonetics.map(function (phonetic, idx) {
            return (
              <div key={idx}>
                <Phonetics phonetic={phonetic} />
              </div>
            );
          })}
        </section>
        {props.results.meanings.map(function (meanings, idx) {
          return (
            <section key={idx}>
              <Meaning meaning={meanings} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
