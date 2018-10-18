// @flow
import React from 'react';
import './ImageSlider.css';

class ImageSlider extends React.Component {
    constructor() {
        super();
        this.state = {
          left: "slide3",
          active: "slide1",
          right: "slide2"
        };
    }

    render() {
        return (
            <div className="slider-container">
                <button className="left" onClick={() => this.left()} >Left</button>
                <div className="slide slide-1 left" ref="slide1" ></div>
                <div className="slide slide-2 center" ref="slide2" ></div>
                <div className="slide slide-3 right" ref="slide3" ></div>
                <button className="right" onClick={() => this.right()} >Right</button>
            </div>
        );
    }
}

export default ImageSlider;