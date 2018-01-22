import React, { Component } from 'react';
import './App.css';
import Dashboard from './component/Dashboard.js';

import browsingMetrics from 'browser-metrics/lib/browsingMetrics';
import Contact from './component/Contact.js';

class App extends React.Component {
  componentDidMount() {
    browsingMetrics({
      trackTiming: (category, name, duration) => {
        // Now, we can send the metrics to a third party to keep track of them. 
      },
      sampleRate: 20,
      log: false,
    });
  }
  
  render = function ()  {  
    return (
      <div className="App">
        <div className="container-fluid">
          <div>
            <Dashboard></Dashboard>
          </div> 
          <Contact></Contact>
        </div>
       </div>
 );
 }
}
export default App;
