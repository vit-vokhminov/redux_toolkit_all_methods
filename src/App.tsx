import React from "react";
import { Route, Routes } from "react-router-dom";
import "App.css";

import Navigation from "components/Navigation";
import EasySlice from "pages/EasySlice";
import ExtraReducers from "pages/ExtraReducers";
import TodoReselect from "pages/TodoReselect";

import NotFound from "pages/NotFound";

function App() {
    return (
        <div className="App">
            <Navigation />

            <div className="main">
                <Routes>
                    <Route path="/" element={<EasySlice />} />
                    <Route path="/extraReducers" element={<ExtraReducers />} />
                    <Route path="/reselect" element={<TodoReselect />} />

                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
