import React from "react";

import {CircularProgressbar, buildStyles} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Progressbar = (props) => {
  return (
    <div style={{margin: "8px", width: "30%"}}>
      <h5 style={{textAlign: "center", fontWeight: "500", height: "15%"}}>{props.name}</h5>
      <CircularProgressbar
        value={props.percentage}
        styles={buildStyles({
          // Rotation of path and trail, in number of turns (0-1)

          pathColor: props.color,
        })}
        text={`${props.percentage}%`}
      />
    </div>
  );
};
export default Progressbar;
