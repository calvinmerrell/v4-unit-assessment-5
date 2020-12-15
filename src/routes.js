import React from "react";
import { Switch, Route } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import Dash from "./components/Dash/Dash";
import Form from "./components/Form/Form";
import Post from "./components/Post/Post";

export default (
    <Switch>
        <Route component={Auth} exact path="/" />
        <Route component={Dash} path='/dash' />
        <Route component={Post} path='/post/:id' /> 
        <Route component={Form} path='/form'/>
    </Switch>
)
