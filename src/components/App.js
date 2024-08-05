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
      <div className="form-container">
        <div className="video-background">
          <video src="https://videos.pexels.com/video-files/5849610/5849610-hd_1920_1080_30fps.mp4" autoPlay muted loop />
        </div>
      
      </div>

     <Footer/>
    </div>
  )
}

export default App