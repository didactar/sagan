import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Home from './home'
import Menu from './menu'
import Workshop from './workshop'
import About from './about'
import Help from './help'
import Contact from './contact'


export default () =>
    <Router history={browserHistory}>
        <Route path='/' >
            <IndexRoute component={Home} />
            <Route path='/workshop/:workshop' component={Workshop} />
            <Route path='/menu' component={Menu} />
            <Route path='/about' component={About} />
            <Route path='/help' component={Help} />
            <Route path='/contact' component={Contact} />
        </Route>
    </Router>
