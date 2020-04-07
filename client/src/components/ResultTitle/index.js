import React from "react";

function SearchBox({ children }) {
  return (
    <div
      style={{ height: 100, clear: "both", paddingTop: 30, textAlign: "center" }}
      className="jumbotron bg-info text-white"
    >
      {children}
    </div>
  );
}

export default SearchBox;
