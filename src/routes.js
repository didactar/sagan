import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import Home from './home/container'
import Profile from './profile/container'
import Workshop from './workshop/container'
import About from './about/container'


export default () =>
    <Router history={browserHistory}>
        <Route path='/' >
            <IndexRoute component={Home} />
            <Route path='/workshop/:workshop' component={Workshop} />
            <Route path='/profile' component={Profile} />
            <Route path='/about' component={About} />
        </Route>
    </Router>
