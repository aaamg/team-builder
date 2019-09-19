import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [user, setUser] = useState({username: "", email: "", role: ""});
  //const [email, setEmail] = useState('');
  //const [role, setRole] = useState('');
  
  const handleUserChange = banana => {
    console.log("changed", banana.target.name, banana.target.value);
    setUser({...user, [banana.target.name]: banana.target.value});
  };

  const handleSubmit = event => {
    event.preventDefault();
   console.log(user);
  };
  
  return (
    <div className="App">
      <form onSubmit={event => handleSubmit(event)}>
        <label>
          Userame: 
          <input 
                name="username"
                type='text' 
                value={user.username}
                onChange={banana => handleUserChange(banana)}
                />
        </label>

        <label>
          email: 
          <input 
                name="email"
                type='text'
                value={user.email} 
                onChange={banana => handleUserChange(banana)}
                />
        </label>

        <label>
          Role: 
          <input 
                name="role"
                type='text'
                value={user.role}  
                onChange={banana => handleUserChange(banana)}
                />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
