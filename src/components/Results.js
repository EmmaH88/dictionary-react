import React from "react";
import Meanings from "./Meaning";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h2>{props.results.word}</h2>

        {props.results.meanings.map(function (meanings, idx) {
          return (
            <div key={idx}>
              <Meanings meaning={meanings} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return "Searching...";
  }
}
