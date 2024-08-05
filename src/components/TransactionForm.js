import React, { useState } from 'react';

function NewTransactionForm({ onAddTransaction }) {
  const [formData, setFormData] = useState({
    date: '',
    description: '',
    category: '',
    amount: ''
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    onAddTransaction(formData);
    setFormData({
      date: '',
      description: '',
      category: '',
      amount: ''
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Date:
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Description:
        <input
        placeholder='describe spending...'
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Category:
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        >
          <option value="">Select Category</option>
          <option value="Income">Income</option>
          <option value="Food">Food</option>
          <option value="Fashion">Fashion</option>
          <option value="Gift">Gift</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Transportation">Transportation</option>
        </select>
      </label>
      <label>
        Amount:
        <input
          type="number"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit">Add Transaction</button>
    </form>
  );
}

export default NewTransactionForm;
