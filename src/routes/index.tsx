import React from 'react';
import { Switch, Route } from 'react-router-dom';

import home from '../pages/home';

const Routes = () => (
    <Switch>
        <Route path="/" component={home}/>
    </Switch>
)

export default Routes;