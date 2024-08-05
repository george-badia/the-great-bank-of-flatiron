import React from 'react';

function SearchBox(props) {
  function handleChange(event) {
    props.onSearch(event.target.value);
  }

  return (
    <input className='search-bar' type="text" onChange={handleChange} placeholder="Search transactions descriptively.." />
  );
}

export default SearchBox;
