import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  return (
    <div className="Phonetics m-2">
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        <i class="fa-solid fa-microphone"></i>
      </a>
      <br />
      <p>{props.phonetic.text}</p>
    </div>
  );
}
