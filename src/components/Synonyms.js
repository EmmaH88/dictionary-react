import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <ul className="Synonyms">
        {props.synonyms.map(function (synonym, idx) {
          return <li key={idx}>{synonym}</li>;
        })}
      </ul>
    );
  } else {
    return null;
  }
}
