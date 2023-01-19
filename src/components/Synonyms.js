import React from "react";

export default function Synonyms(props) {
  console.log(props.synonyms);

  if (props.synonyms) {
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
