import React, {Component} from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Contacts from "../Pages/Contacts/Contacts";

class Body extends Component {
    render() {
        return (
            <div>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contacts" element={<Contacts />} />
                    {/*<Route path="/*" element={<NoPage />} />*/}
                </Routes>
                
            </div>
        );
    }
}

export default Body;
