import React from "react";
import { Route, Routes } from "react-router-dom";
import Error404 from "./components/Error404";
import { Dashboard } from "./views/Dashboard";
import { Menu } from "./views/Menu";
import { Pokemon } from "./views/Pokemon";

const Router = () => {

    const routeArray = [
        {
            path: '/',
            element: Dashboard,
            key: 'Dashboard'
        },
        {
            path: '/menu',
            element: Menu,
            key: 'MenuItem'
        },
        {
            path: '/pokemon',
            element: Pokemon,
            key: 'Pokemon'
        }
    ];

    return (
        <Routes>
            {routeArray.map(value => (
                 <Route exact path={value.path} Component={value.element} key={value.key}></Route>
            ))}
            <Route path="*" element={<Error404 />}></Route>
        </Routes>
    );
}


export default Router;