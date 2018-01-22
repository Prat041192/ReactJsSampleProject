
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

 
class DemoCarousel extends React.Component {
    render() {
        return (
            <Carousel autoPlay showThumbs={false}>
                <div className="ImageShape">
                    <img src={"../images/Indian-Food-platter.jpg"} className="ImageShape"/>
                </div>
                <div className="ImageShape">
                    <img src="../images/North-India-Platter.jpg" className="ImageShape" alt="kch bhi"/>
                </div>
                <div className="ImageShape">
                    <img src="../images/South-Indian-Food.jpg" className="ImageShape" alt="kch bhi"/>
                </div>
                <div className="ImageShape">
                    <img src="../images/East-India-Platter.jpg" className="ImageShape" alt="kch bhi"/>
                </div>
                <div className="ImageShape">
                    <img src="../images/West-Indian-Platter.jpg" className="ImageShape" alt="kch bhi"/>
                </div>
            </Carousel>
        );
    }
}

export default DemoCarousel