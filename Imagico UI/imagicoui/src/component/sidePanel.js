
import React, { Component } from 'react';
import { 
    BrowserRouter, 
    Route, 
    Link
} from "react-browser-router";

class sidePanel extends React.Component {
    render() {
        return (
	            <div className="collapse navbar-collapse">
				        <ul className="nav navbar-nav navbar-right">
				          <li><Link to={"/"}><span className="glyphicon glyphicon-home"></span> Home</Link></li>
				          <li><Link to={"/NonVegDishes"}>Non Vegeterian Dishes</Link></li>
				          <li><Link to={"/VegDishes"}>Vegeterian Dishes</Link></li>
				          <li><Link to={"/About"}>About</Link></li>
				        </ul>
				</div>
          
        );
    }
}

export default sidePanel