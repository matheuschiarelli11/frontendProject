import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./pages/main";
import login from "./pages/login";
import register from "./pages/register";

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={login} />
                <Route path="/main" component={Main} />
                <Route path="/register" component={register} />
            </Switch>
        </BrowserRouter>
    );
}
