import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 150, clear: "both", paddingTop: 30, textAlign: "center" }}
      className="jumbotron bg-info text-white"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
