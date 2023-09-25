import React, { useState, useEffect, useCallback } from 'react';
import { Link } from "react-router-dom";
import "./Searchbar.css";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]);
  const [errors, setError] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/searchByName?name=${searchTerm}`);
      const data = await response.json();
      setData(data["Dormitory Catalog"]);
      setError(false);
    } catch (error) {
      setError(true);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleInputChange = e => {
    setSearchTerm(e.target.value);
  };

  const filteredData = typeof data === 'object' && Array.isArray(data) 
  ? Array.from(data).filter((val) => {
      if (searchTerm === '') {
        return val;
      } else if (val.dor_name && val.dor_name.toLowerCase().includes(searchTerm.toLowerCase())) {
        return val;
      }
    })
  :[];

  return (
    <div className='Search_container'>
        <input 
          type="text" 
          value={searchTerm} 
          onChange={handleInputChange} />
        {filteredData.map((val, key) => (
          <div key={key}>
            <Link to={`/${val}`}>
              <button type="submit">Peyment</button>
            </Link>
          </div>
        ))}
    </div>
  );
}
export default SearchBar;