import React from 'react';
import Register from './Register'
import Login from './Login';
import { Route, Link } from 'react-router-dom';
// import { Button } from 'reactstrap';
import './App.css'; 

function App() {

  
  return (
    <>
    <header>
      <h1>landbnb</h1>
    </header>
    <div className='landbuttons'>
      <button color="primary" size="lg">
        <Link className='RegLink' to='/register'> Register Here </Link>
      </button>
        <Route exact path='/register'>
          <Register />
        </Route>
        <Route exact path='/login'>
          <Login />
        </Route>
      <button color="primary" size="lg">
        <Link className ='RegLink' to='/login'> Already a user?  </Link>
      </button>
    </div> 
    </>
  )
}

export default App;
