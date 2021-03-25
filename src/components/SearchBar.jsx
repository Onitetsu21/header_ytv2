import React from 'react'

function SearchBar() {
    return (
      <div className="searchBar">
        <input type="text" placeholder="Rechercher" className="searchInput"/>
        <div value="Rechercher" className="searchButton"> <img src="./images/search.svg" alt="searchIcon"/></div>
      </div>
    )
  }

export default SearchBar