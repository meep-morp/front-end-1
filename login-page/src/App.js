import React from 'react';
import Register from './Register'
import Login from './Login';
import { Route, Link } from 'react-router-dom';
// import { Button } from 'reactstrap';
import './App.css'; 

function App() {

  
  return (
    <div>
    <button color="primary" size="lg"><Link className='RegLink' to='/register'> Register Here! </Link></button>
    <button color="primary" size="lg"><Link className ='RegLink' to='/login'> Already a user? Login here! </Link></button>
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
