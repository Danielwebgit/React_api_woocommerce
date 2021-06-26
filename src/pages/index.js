import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { useSelector } from "react-redux";

import Add from './Add'
import AddUser from './AddUser'
import Login from "./Login";
import Loja from "./Loja";


 function PrivateRoute({ component : Component, ...rest }) {

     const { isAuthenticated } = useSelector(state => state.auth);

     return (
         <Route {...rest} render={props => (
             isAuthenticated ? (<Component {...props}/>): (<Redirect to={{pathname:'/',state:{from:props.location}}}/>)
         ) } />
     )
 }

export default () => (

    <Switch>

        <PrivateRoute path="/add" component={Add} />
        <PrivateRoute path="/addUser" component={AddUser} />
        <Route path="/login" component={Login} />
        <Route path="/loja" component={Loja} />
        <Redirect path="/" to="/login" />

    </Switch>
)
