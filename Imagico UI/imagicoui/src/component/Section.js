import React from 'react';
 
 class Section extends React.Component {

    render() {
      console.log(this.props);
      return(
        <div className="container-fluid bg-grey">
        <div className="row">
          <h2 className="SectionHead">{this.props.sectionItem.title}</h2>
          <div className="thumbnail">
            <img className="DishImage" src={this.props.sectionItem.imageurl} alt="kch bhi"/>
          </div>
          <div>
          <div className="SubHeader"><p className="caption"> Category: {this.props.sectionItem.category}</p></div>
          <p> Description:   {this.props.sectionItem.description}</p>
          </div>
          <hr/>
          </div>
        </div>
      );
     
    }
  }

  export default Section