import React from 'react'
import { Switch, Route } from 'react-router-dom'

import PrivateRoute from './components/PrivateRoute'

import Home from './pages/Home'
import Login from './pages/Login'
import NotFound from './pages/NotFound'

const Routes = () => {
    return (
        <Switch>
            <PrivateRoute exact path="/" component={Home} />
            <Route path="/login" component={Login} />

            <PrivateRoute path="*" component={NotFound} />
        </Switch>
    )
}

export default Routes
