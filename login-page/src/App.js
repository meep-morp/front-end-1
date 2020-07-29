import React from 'react';
import Register from './Register'
import Login from './Login';
import { Route, Link } from 'react-router-dom'
import './App.css';

function App() {

  
  return (
    <div>
    <Link to='/register'>Register here</Link>
    <Link to='/login'>Already a user? Login here</Link>
    <Route exact path='/register'>
      <Register />
    </Route>
    <Route exact path='/login'>
      <Login />
    </Route>
    </div> 
  )
}

export default App;
