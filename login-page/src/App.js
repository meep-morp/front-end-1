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
      
        <Link className='RegLink' to='/register'>
          <button color="primary" size="lg"> Register Here </button>
        </Link>
      
        <Route exact path='/register'>
          <Register />
        </Route>
        <Route exact path='/login'>
          <Login />
        </Route>
      
        <Link className ='RegLink' to='/login'>
          <button color="primary" size="lg">Already a user?</button>
        </Link>
      
    </div> 
    </>
  )
}

export default App;
