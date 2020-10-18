import React from 'react';
import { Switch, Route } from 'react-router-dom';

import home from '../pages/home';
import about from '../pages/about';
import contact from '../pages/contact';

const Routes = () => (
    <Switch>
        <Route path="/home" component={home}/>
        <Route path="/about" component={about}/>
        <Route path="/contact" component={contact}/>
    </Switch>
)

export default Routes;