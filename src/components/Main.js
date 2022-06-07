import React from "react";
import Dices from "./Dices";

function Main() {
  return (
    <div className="Main">
      <h1>Tenzies</h1>
      <p className="text">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls
      </p>
      <Dices />
    </div>
  );
}

export default Main;
