import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Home from './home'
import User from './user'
import Workshop from './workshop'
import About from './about'
import Help from './help'
import Settings from './settings'


export default () =>
    <Router history={browserHistory}>
        <Route path='/' >
            <IndexRoute component={Home} />
            <Route path='/workshop/:workshop' component={Workshop} />
            <Route path='/user/:username' component={User} />
            <Route path='/about' component={About} />
            <Route path='/help' component={Help} />
            <Route path='/settings' component={Settings} />
        </Route>
    </Router>
