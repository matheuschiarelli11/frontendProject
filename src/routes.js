import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./pages/main";
import login from "./pages/login";
import register from "./pages/register";
import user from "./pages/userInfo";

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={login} />
                <Route path="/main" component={Main} />
                <Route path="/register" component={register} />
                <Route path="/user" component={user} />
            </Switch>
        </BrowserRouter>
    );
}
