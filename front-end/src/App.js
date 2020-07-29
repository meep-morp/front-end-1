import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {PrivateRoute} from './components/PrivateRoute';
import Login from './components/Login';
import SignUp from './components/SignUp';
import PageNotFound from './components/PageNotFound';
import MyListings from './components/MyListings';
import Listing from './components/Listing';
import PageNotFound from './components/PageNotFound';

const App = () => {
	return (
		<div className='App'>
			<Switch>
				<Route exact path='/' component={Login}/>
				<Route path='/signup' component={SignUp}/>
				
				<Route path='/pagenotfound' component={PageNotFound}/>
				
				<PrivateRoute path='/dashboard' component={MyListings}/>
				<PrivateRoute path='/listing/:id' component={Listing}/>
			
				<Route component={PageNotFound}/>
			</Switch>
		</div>
	);
};

export default App;