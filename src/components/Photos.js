import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    console.log(props.photo);
    return (
      <section className="Photos">
        <h4>image gallery</h4>
        <div className="row">
          {props.photos.map(function (photos, idx) {
            return (
              <div className="col-4" key={idx}>
                <a href={photos.src.original} target="_blank" rel="noreferrer">
                  <img
                    src={photos.src.landscape}
                    className="img-fluid m-3"
                    alt="keyword images"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
