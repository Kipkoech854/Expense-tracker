
import React, { useState } from 'react';

function TextBars({onAddSubmission}) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    amount: '',
    date: ''
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit() {
    onAddSubmission(formData);
    setFormData({
      name: '',
      description: '',
      category: '',
      amount: '',
      date: ''
    });
  }

  return (
    <div>
      <input type="text" name="name" value={formData.name} placeholder="Enter expense name" onChange={handleChange} />
      <input type="text" name="description" value={formData.description} placeholder="Enter expense description" onChange={handleChange} />
      <input type="text" name="category" value={formData.category} placeholder="Enter expense category" onChange={handleChange} />
      <input type="text" name="amount" value={formData.amount} placeholder="Enter amount" onChange={handleChange} />
      <input type="date" name="date" value={formData.date} onChange={handleChange} />
      <button id="submit-button" onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default TextBars;
