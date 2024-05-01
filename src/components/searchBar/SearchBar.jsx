import { useState } from 'react';
import './searchBar.scss';

const types = ["sale", "rent"];

function SearchBar() {
  const [query, setQuery] = useState({
    type: 'sale',
    location: '',
    minPrice: 0,
    maxPrice: 0,
  });

  const switchType = (val) => {
    setQuery((prev)=>({...prev, type: val}))
  }

  return (
    <div className="searchBar">
      <div className="type">
        {types.map((type) => (
            <button onClick={()=>switchType(type)} className={query.type==type? 'active': ''}>{type}</button>
        ))}
        
      </div>
      <form action="#">
        <input type="text" name="location" placeholder="City" />
        <input
          type="number"
          name="minPrice"
          min={0}
          max={5000000000}
          placeholder="Min Price"
        />
        <input
          type="number"
          name="maxPrice"
          min={0}
          max={5000000000}
          placeholder="Max Price"
        />
        <button type="submit">
          <img src="/search.png" alt="" />
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
