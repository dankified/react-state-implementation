import React from "react";
import Character from './Character';

export default function Characters(props) {
	console.log("Characters: I was rendered!");
	return (
    <div>
      {props.data.map((el, i) => {
        return <Character data={el} key={i} />;
      })}
    </div>
  );
};
