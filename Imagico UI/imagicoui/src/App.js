import React, { Component } from 'react';
import './App.css';
import Dashboard from './component/Dashboard.js';
import ImageLog from './component/Imagelog.js';
import browsingMetrics from 'browser-metrics/lib/browsingMetrics';

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
        <header className="App-header">
          <h1 className="App-title"> Foody Chapter </h1>
        </header>
        <div className="container">
          <div className="jumbotron">
            <h2 className="text-center">Welcome!</h2>
            <ImageLog></ImageLog>
            <hr />
          </div>
          <div>
            <Dashboard></Dashboard>
          </div> 
        </div>
       </div>
 );
 }
}
export default App;
