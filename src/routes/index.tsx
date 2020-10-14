import React from 'react';
import { Switch, Route } from 'react-router-dom';

import dashboard from '../pages/dashboard';

const Routes = () => (
    <Switch>
        <Route path="/dashboard" component={dashboard}/>
    </Switch>
)

export default Routes;