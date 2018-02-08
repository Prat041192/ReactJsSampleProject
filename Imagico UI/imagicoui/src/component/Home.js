import React from 'react';
import DocumentTitle from 'react-document-title';

 
export default class Home extends React.Component {
  render() {
    return (
    	<DocumentTitle title={`Home`}>
          <div className="container-fluid bg-grey">
            <div className="table">
              <div className="row">
                <h3><strong>Welcome to Foody's Chapter.</strong></h3>
              </div>
              <div className="row">
                <h4><br></br>Your directory to Indian Food Cousines!</h4>
              </div>
              <div className="row">
                <p className="App-intro">
                  <br></br> This is a web app created over react js to implement the web app concepts and improvise for further
                  refinement as PWA (Progressive Web App). For present use the app has several components written in javascript and certain images to let the image load
                  and single html page, since this is a single page application so single html page has been used and rest of the other components are loaded using the react components
                  load technique.
                </p>
              </div>
              <hr />
            </div>
          </div>
      </DocumentTitle>
     
    );
  }
}