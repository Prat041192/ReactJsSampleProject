
import React, { Component } from 'react';
import { 
    BrowserRouter, 
    Route, 
    Link
} from "react-browser-router";

class sidePanel extends React.Component {
    render() {
        return (
	            <aside>
				        <ul>
				          <li><Link className="btn btn-primary" to={"/"}>Home</Link></li>
				          <li><Link className="btn btn-primary" to={"/NonVegDishes"}>Non Vegeterian Dishes</Link></li>
				          <li><Link className="btn btn-primary" to={"/VegDishes"}>Vegeterian Dishes</Link></li>
				          <li><Link className="btn btn-primary" to={"/About"}>About</Link></li>
				        </ul>
				</aside>
          
        );
    }
}

export default sidePanel