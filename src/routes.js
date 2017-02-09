import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import Home from './home/container'
import Menu from './menu/container'
import Workshop from './workshop/container'
import About from './about/container'
import Help from './help/container'
import Contact from './contact/container'


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
