import React from "react";

function Box(props) {
  const style = props.isheld ? "#32CD32" : "#fff";
  return (
    <div
      className="Box"
      style={{ backgroundColor: style }}
      onClick={props.holdDice}
    >
      {props.value}
    </div>
  );
}

export default Box;
