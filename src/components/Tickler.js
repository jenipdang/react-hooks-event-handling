import React from "react";

function Tickler() {
  // return <button onClick={() => console.log("TeeHee")}>Tickle me!</button>;
  function tickle() {
    console.log("Teehee!");
  }
return <button onClick={tickle}>Tickle me!</button>;
  
}

export default Tickler;
