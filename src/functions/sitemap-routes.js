import React from 'react';
import { Route } from 'react-router';
 
export default (
    <Route>
		<Route path='/' />
		<Route path='/basics/' />
		<Route path='/magic/' />
		<Route path='/magic/:id' />
		<Route path='/species/' />
		<Route path='/species/:id' />
    </Route>
);