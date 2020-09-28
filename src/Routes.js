import React from 'react';
import { BrowserRouter as MyRouter, Switch, Route } from 'react-router-dom';

import App from './App';
import Activate from './auth/Activate';
import AdminRoute from './auth/AdminRoute';
import ForgotPassword from './auth/ForgotPassword';
import PrivateRoute from './auth/PrivateRoute';
import ResetPassword from './auth/ResetPassword';
import Signin from './auth/Signin';
import Signup from './auth/Signup';
import Admin from './core/Admin';
import Private from './core/Private';




const Routes = () => {
    return (
        <MyRouter>
            <Switch>

                <Route path="/" exact component={App} />
                <Route path="/signup" exact component={Signup} />
                <Route path="/signin" exact component={Signin} />
                <Route path="/auth/activate/:token" exact component={Activate} />
                <PrivateRoute path="/private" exact component={Private} />
                <AdminRoute path="/admin" exact component={Admin} />

                <Route path="/auth/password/forgot" exact component={ForgotPassword} />
                <Route path="/auth/password/reset/:token" exact component={ResetPassword} />
            </Switch>

        </MyRouter>
    )
}

export default Routes
