import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {LoginForm} from './components/LoginForm';
import {SignupForm} from './components/SignupForm';

window.React = React;

export const routes = (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={LoginForm} />
            <Route path="/signup" component={SignupForm} />
        </Switch>
    </BrowserRouter>
);

export default routes;
