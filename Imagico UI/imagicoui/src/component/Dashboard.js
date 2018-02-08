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
import ImageLog from './Imagelog.js';
 
export default class Dashboard extends React.Component {

  render() {
    return (
        
       <BrowserRouter>
        <div>
         <div className="jumbotron">
             <div>
                 <div className="App-title">
                     <h1> Foody's Chapter </h1>
                 </div>
             </div>
             <div><SidePanel></SidePanel></div>
                <ImageLog></ImageLog>
                <hr />
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