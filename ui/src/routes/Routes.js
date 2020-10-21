import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import CreateProfile from '../pages/CreateProfile';
import EditProfile from '../pages/EditProfile';
import Layout from '../components/Layout';

const NotFound = () => {
    return(
        <h1>Not found</h1>
    )
}


const Routes = () => {
    return (
        <Router>
            <Layout>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/profile/:id" exact component={Profile}/>
                    <Route path="/create-profile" exact component={CreateProfile}/>
                    <Route path="/edit-profile/:id" exact component={EditProfile}/>
                    <Route path="/*" exact component={NotFound}/>
                </Switch>
            </Layout>
        </Router>
    )
}

export default Routes;