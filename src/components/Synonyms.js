import React from "react";

export default function Synonyms(props) {
  if (props.synonym) {
    return (
      <ul className="Synonyms">
        {props.synonym.map(function (synonym, idx) {
          return <li key={idx}>{synonym}</li>;
        })}
      </ul>
    );
  } else {
    return null;
  }
}
