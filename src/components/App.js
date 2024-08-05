import React, { useState } from 'react';
import Navbar from './Navbar'
import Footer from './Footer'
import SearchBox from './SearchBox';

function App() {
  const [searchQuery, setsearchQuery] = useState('');


  function handleSearch(query) {
    setsearchQuery(query);
  }

  return (
    <div className='app'>
     <Navbar />
     <h2>The Great Bank of Flatiron</h2>
     <div className="search-bar">
        <SearchBox onSearch={handleSearch} />
      </div>

     <Footer/>
    </div>
  )
}

export default App