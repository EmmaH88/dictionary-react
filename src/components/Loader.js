import React from "react";
import { Audio } from "react-loader-spinner";
export default function Loader() {
  return (
    <div className="Loader">
      <Audio
        height="100"
        width="100"
        radius="9"
        color="blueviolet"
        ariaLabel="Loading"
        wrapperStyle
        wrapperClass
      />
    </div>
  );
}
