import React from 'react';
import Register from './Register'
import Login from './Login';
import { Route, Link } from 'react-router-dom';
// import { Button } from 'reactstrap';
import './App.css'; 
import PrivateRoute from './utils/PrivateRoute';
import Dashboard from './Dashboard/Dashboard';
import { AppProvider } from './context/AppContext';

function App() {
  
  return (
    <AppProvider>
    <div className='landbuttons'>
      
        <Route exact path='/register'>
        <Link className='RegLink' to='/register'>
          <button color="primary" size="lg"> Register Here </button>
        </Link>
          <Register />
          <Link className ='RegLink' to='/login'>
          <button color="primary" size="lg">Already a user?</button>
        </Link>
        </Route>
        <Route exact path='/login'>
          <Login />
        </Route>
        <PrivateRoute path="/dashboard">
          <Dashboard />
        </PrivateRoute>
      
    </div> 
    </AppProvider>
  )
}

export default App;
