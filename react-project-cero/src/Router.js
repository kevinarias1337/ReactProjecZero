import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Content from "./components/Content";
import Error404 from "./components/Error404";

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Content />}></Route>
                    <Route path="*" element={<Error404 />}></Route>
                </Routes>
            </BrowserRouter>
        );
    }
}

export default Router;