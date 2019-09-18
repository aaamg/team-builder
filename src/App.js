import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  
  const handleNameChange = banana => {
    setName(banana.target.value);
  };

  const handleEmailChange = banana => {
    setEmail(banana.target.value);
  };

  const handleRoleChange = banana => {
    setRole(banana.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(name);
    console.log(email);
    console.log(role);
  };
  
  return (
    <div className="App">
      <form onSubmit={event => handleSubmit(event)}>
        <label>
          Name: 
          <input 
                id="name"
                type='text' 
                onChange={banana => handleNameChange(banana)}
                />
        </label>

        <label>
          email: 
          <input 
                id="email"
                type='text' 
                onChange={banana => handleEmailChange(banana)}
                />
        </label>

        <label>
          Role: 
          <input 
                id="role"
                type='text' 
                onChange={banana => handleRoleChange(banana)}
                />
        </label>
        <button type="submit">Submit</button>
      </form>
      {console.log({name})}
      {console.log({email})}
      {console.log({role})}
    </div>
  );
}

export default App;
