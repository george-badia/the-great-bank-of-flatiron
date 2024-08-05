import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CashTable from './CashTable';
import TransactionForm from './TransactionForm';
import SearchBox from './SearchBox';
import "../App.css";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [searchQuery, setsearchQuery] = useState('');

  useEffect(function() {
    fetch('http://localhost:8002/transactions')
      .then(response => response.json())
      .then(data => setTransactions(data))
      .catch(error => console.error('Error fetching transactions:', error));
  }, []);
  
  function addTransaction(newTransaction) {
    fetch('http://localhost:8002/transactions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTransaction)
    })
      .then(response => response.json())
      .then(data => {
        setTransactions([...transactions, data]);
      })
      .catch(error => console.error('Error adding transaction:', error));
  }
  

  function handleSearch(query) {
    setsearchQuery(query);
  }

  function deleteTransaction(id) {
    setTransactions(transactions.filter(transaction => transaction.id !== id));
  }

  const filteredTransactions = transactions.filter(transaction =>
    transaction.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="app">
      <Navbar />
      <h2>The Great Bank of Flatiron</h2>
      <div className="search-bar">
        <SearchBox onSearch={handleSearch} />
      </div>
      <div className="form-container">
        <div className="video-background">
          <video src="https://videos.pexels.com/video-files/5849610/5849610-hd_1920_1080_30fps.mp4" autoPlay muted loop />
        </div>
        <TransactionForm onAddTransaction={addTransaction} />
      </div>
      <CashTable transactions={filteredTransactions} onDelete={deleteTransaction} />
      <Footer />
    </div>
  );
}

export default App;
