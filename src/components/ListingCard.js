import React, { useState } from "react";

function ListingCard({list, onDelete}) {
  const [fav, setFav] = useState(false)

  function handleFav() {
    setFav(!fav)
  }

  function handleDelete(){
    onDelete(list.id)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={list.image} alt={"description"} />
      </div>
      <div className="details">
        {fav ? (
          <button onClick={handleFav} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleFav} className="emoji-button favorite">☆</button>
        )}
        <strong>{list.description}</strong>
        <span> · {list.location}</span>
        <button onClick={handleDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
