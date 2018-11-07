import React from 'react'
import {Router, Route, browserHistory } from 'react-router'

import Main from './main/main.jsx'
import Sec from './sec/sec.jsx'

export default props => (
    <Router history={browserHistory}>
        <Route path='/' component={Main}></Route>
        <Route path='/sec' component={Sec}></Route>
    </Router>
)    