import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import Home from './home/container'
import Workshop from './workshop/container'


export default () =>
    <Router history={browserHistory}>
        <Route path='/' >
            <IndexRoute component={Home} />
            <Route path='/workshop/:workshop' component={Workshop} />
        </Route>
    </Router>
