import React from 'react';
 
 class Section extends React.Component {

    render() {
      console.log(this.props);
      return(
        <div className="container-fluid bg-grey">
            <div className="row">
                <div className="SectionHead thumbnail">
                    <div className="row">
                        <div className="col-md-4">
                            <h2 >{this.props.sectionItem.title}</h2>
                        </div>
                        <div className="col-md-8">
                            <p className="caption"> Category: {this.props.sectionItem.category}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <img src={this.props.sectionItem.imageurl} alt="kch bhi"/>
                        </div>
                        <div className="col-md-9">
                            <p> Description:   {this.props.sectionItem.description}</p>
                        </div>
                    </div>
              </div>
            </div>
            <hr/>
        </div>
      );
     
    }
  }

  export default Section