import React from 'react';
import SectionItem from './Section.js'
 
 class MainPage extends React.Component {

    render() {
      console.log(this.props);
      let Sections;
      if (this.props.dish) {
      Sections = this.props.dish.map(section => {
        return (
          <SectionItem key={section.title} sectionItem={section}/>
          );
      });
    }
    console.log(Sections);
      return(
      <div>
          <div className="row">
            <div>
              {Sections}
            </div>
          </div>
        </div>
      );
     
    }
  }
  export default MainPage