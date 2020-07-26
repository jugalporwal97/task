import React from "react";
import "react-circular-progressbar/dist/styles.css";
import {IconContext} from "react-icons";
import {BsFillCaretUpFill, BsFillCaretDownFill} from "react-icons/bs";

const Flucationbar = (props) => {
  const upicon = (
    <IconContext.Provider value={{color: "green", className: "global-class-name"}}>
      <BsFillCaretUpFill style={{marginTop: "1px"}} />
    </IconContext.Provider> 
  );
  const downicon = (
    <IconContext.Provider value={{color: "red", className: "global-class-name"}}>
      <BsFillCaretDownFill style={{marginTop: "1px"}} />
    </IconContext.Provider>
  );

  return (
    <div style={{margin: "8px", width: "30%"}}>
      <h5 style={{textAlign: "center", fontWeight: "500", height: "15%"}}>{props.name}</h5>
      <div
        style={{
          textAlign: "center",
          marginTop: "50%",
          marginLeft: "14%",
        }}
      >
        {props.percentage}%{props.percentage >= 0 ? upicon : downicon}
      </div>
    </div>
  );
};
export default Flucationbar;
