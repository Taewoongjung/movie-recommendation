import React from 'react';
import loadable from '@loadable/component';
import { Switch, Route, Redirect } from 'react-router-dom';

const LogIn = loadable(() => import('../../pages/Login'));
const Join = loadable(() => import('../../pages/Join'));
const Main = loadable(() => import('../../pages/Main'));

const App = () => {
    return (
        <Switch>
            <Redirect exact path="/" to="/login" />
            <Route path="/login" component={LogIn}/>
            <Route path="/join" component={Join}/>
            <Route path="/main" component={Main}/>
        </Switch>
    )
}

export default App;