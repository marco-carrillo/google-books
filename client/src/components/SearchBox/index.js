import React from "react";

function SearchBox({ children }) {
  return (
    <div
      style={{ height: 200, clear: "both", paddingTop: 30, textAlign: "center" }}
      className="jumbotron bg-primary"
    >
      {children}
    </div>
  );
}

export default SearchBox;
