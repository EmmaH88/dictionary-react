import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, idx) {
        return (
          <div key={idx}>
            <p>
              <span className="p-headers">definition:</span>
              <br />
              {definition.definition}
            </p>

            <p>
              {" "}
              <span className="p-headers">example: {""}</span>
              <br />
              {definition.example}
            </p>
            <Synonyms synonyms={definition.origin} />
          </div>
        );
      })}
    </div>
  );
}
