import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])
  const [searchText, setSearchText] = useState('')

  useEffect(() => {
    fetch('http://localhost:6001/listings')
      .then(res => res.json())
      .then(lists => setListings(lists))
      .catch(err => console.error('Something wrong: ', err))
  },[])

  function handleDelete(id) {
    fetch(`http://localhost:6001/listings/${id}`, {
      method : 'DELETE'
    })

    setListings(listings.filter(list => list.id !== id))

  }

  function handleSearch(text) {
    setSearchText(text)
  }

  return (
    <div className="app">
      <Header handleSearch={handleSearch} />
      <ListingsContainer listings={listings} searchQuery={searchText} onDelete={handleDelete}/> 
      {/* {listings.length !== 0 ? <ListingsContainer listings={listings} /> : <h1>Nothing found!</h1>} */}
    </div>
  );
}

export default App;
