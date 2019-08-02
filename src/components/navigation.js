import  React from 'react';
import { BrowserRouter as Router, Route, } from "react-router-dom";
import Login from './login';
import CreateWallet from './createwallet';
import RestoreWallet from './restorewallet';
import RestoreWallet2 from './restorewallet2';
import Dashboard from './dashboard';
import App from '../App';


const navigation = (
    <Router>
        <Route exact path="" component={App} />
        <Route path="/login" component={Login} />
        <Route path="/createwallet" component={CreateWallet} />
        <Route path="/restorewallet" component={RestoreWallet} />
        <Route path="/restorewallet2" component={RestoreWallet2} />
        <Route path="/dashboard" component={Dashboard} />
        
    </Router>
);

export default navigation;