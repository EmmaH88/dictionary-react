import React from "react";

export default function Meanings(props) {
  console.log(props.meaning);
  return (
    <div className="Meanings">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, idx) {
        return (
          <div key={idx}>
            <p>definition: {definition.definition}</p>
            <p>example: {definition.example}</p>
          </div>
        );
      })}
    </div>
  );
}
