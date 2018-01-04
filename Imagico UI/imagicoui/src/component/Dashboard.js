import React from 'react';
import { 
    BrowserRouter, 
    Route, 
    Link
} from "react-browser-router";

import Home from './Home.js';
import NonVegDishes from './NonVegDishesPage.js';
import VegDishes from './VegDishes.js';
import About from './About.js';
import SidePanel from './sidePanel.js';
 
export default class Dashboard extends React.Component {

  render() {
    return (
        
       <BrowserRouter>
        <div>
       <div className="SidePanel">
         <SidePanel></SidePanel>
         </div>
       <div>
                 <Route exact path="/" component={Home} />
                 <Route path="/NonVegDishes" component={NonVegDishes} />
                 <Route path="/VegDishes" component={VegDishes} />
                 <Route path="/About" component={About} />
       </div>
       </div>
      </BrowserRouter>
    );
  }
}