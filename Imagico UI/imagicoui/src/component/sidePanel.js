
import React, { Component } from 'react';
import { 
    BrowserRouter, 
    Route, 
    Link
} from "react-browser-router";

class sidePanel extends React.Component {
    render() {
        return (
            <div>


                <nav className="navbar navbar-default navbar-fixed-top">
                        <div className="navbar-collapse" id="myNavbar">
                            <ul className="nav navbar-nav navbar-right">
                                <li><Link to={"/"}><span className="glyphicon glyphicon-home"> Home</span></Link></li>
                                <li><Link to={"/NonVegDishes"}>Non Vegeterian Dishes</Link></li>
                                <li><Link to={"/VegDishes"}>Vegeterian Dishes</Link></li>
                                <li><Link to={"/About"}>About</Link></li>
                            </ul>
                        </div>
                </nav>
            </div>
        );
    }
}

export default sidePanel