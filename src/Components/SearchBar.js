import React from "react";

function SearchBar(props) {
  return (
    <div className="search-bar-container">
      <input
        className="search-input"
        type="text"
        placeholder="Wpisz nazwę miejscowości..."
        value={props.search}
        onChange={props.inputChange}
        onKeyPress={e => {
          if (e.key === "Enter") {
            props.searchClick();
          }
        }}
      />
      <div className="search-button-container">
        <button onClick={props.searchClick} className="search-button">
          SZUKAJ
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
