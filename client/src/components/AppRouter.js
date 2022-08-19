import React from 'react';
import {Switch, Route, Redirect} from "react-router-dom";

const AppRouter = () => {
    const isAuth = false;
    return (
        <Switch>
            {authRoutes.map(({path,Component}) =>
            <Route>
                
            </Route>)}
        </Switch>
    );
};

export default AppRouter;