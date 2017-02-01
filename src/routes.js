import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import Welcome from './welcome/container'
import Explore from './explore/container'
import Workshop from './workshop/container'


export default () =>
    <Router history={browserHistory}>
        <Route path='/' >
            <IndexRoute component={Welcome} />
            <Route path='/explore' component={Explore} />
            <Route path='/workshop/:workshop' component={Workshop} />
        </Route>
    </Router>
