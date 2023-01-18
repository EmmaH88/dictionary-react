import React from "react";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        Listen here..
      </a>
      <br />
      {props.phonetic.text}
    </div>
  );
}