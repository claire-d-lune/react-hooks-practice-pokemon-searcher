import React from "react";

function Search({pokedex, searchTerm, setSearchTerm}) {
  

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value)
  }
  

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input onChange={handleOnChange} value={searchTerm} placeholder="search here" className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
