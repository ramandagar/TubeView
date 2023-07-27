import React, { useState } from 'react';

const App = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    Email: '',
  });

  const [isSubmitted, setSubmitted] = useState(false);

  const handleInputChange = (event, fieldName) => {
    const { value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('submitted data is here', formData);
    setSubmitted(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            style={{
              borderColor: 'red',
              borderWidth: '2px',
              margin: '50px',
            }}
            type='text'
            placeholder='firstName'
            name='firstName'
            onChange={(e) => handleInputChange(e, 'firstName')}
          />
        </div>
        <div>
          <input
            style={{
              borderColor: 'red',
              borderWidth: '2px',
              margin: '50px',
            }}
            type='text'
            placeholder='LastName'
            name='lastName'
            onChange={(e) => handleInputChange(e, 'lastName')}
          />
        </div>

        <div>
          <input
            style={{
              borderColor: 'red',
              borderWidth: '2px',
              margin: '50px',
            }}
            type='email'
            placeholder='Email'
            name='Email'
            onChange={(e) => handleInputChange(e, 'Email')}
          />
          <button type='submit'>Submit</button>
        </div>
      </form>

      {isSubmitted && (
        <div>
          <h2>Submitted Data:</h2>
          <p>First Name: {formData.firstName}</p>
          <p>Last Name: {formData.lastName}</p>
          <p>Email: {formData.Email}</p>
        </div>
      )}
    </div>
  );
};

export default App;
