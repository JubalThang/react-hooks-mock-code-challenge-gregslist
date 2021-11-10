

import ListingCard from "./ListingCard";

function ListingsContainer({listings, searchQuery, onDelete}) {


  const filtered =  listings.filter(list => 
        list.description.toLowerCase().includes(searchQuery.toLowerCase()))
    
  
  
  return (
   
    <main>
      <ul className="cards">
        {/* use the ListingCard component to display listings */}
       {filtered.length !== 0 ?
         filtered.map(list => <ListingCard key={list.id} list={list} onDelete={onDelete}/>)
         :
         <h1>No listiongs found!</h1>
       }
       
      </ul>
    </main>
  );
}

export default ListingsContainer;
