import React from "react";

export default function Character(props) {
  return (
    <div className="character">
      <h1>{props.data.name}</h1>
    </div>
  );
}
