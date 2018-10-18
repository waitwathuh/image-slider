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

    left()
    {
        var left = this.refs[ this.state.left ];
        left.classList.remove( 'left', 'center', 'right' );
        left.classList.add( 'center' );

        var center = this.refs[ this.state.active ];
        center.classList.remove( 'left', 'center', 'right' );
        center.classList.add( 'right' );

        var right = this.refs[ this.state.right ];
        right.classList.remove( 'left', 'center', 'right' );
        right.classList.add( 'left' );

        var newLeft = (this.state.left === "slide1") ? "slide2" : (this.state.left === "slide2") ? "slide3" : "slide1" ;
        var newCenter = (this.state.active === "slide1") ? "slide2" : (this.state.active === "slide2") ? "slide3" : "slide1" ;
        var newRight = (this.state.right === "slide1") ? "slide2" : (this.state.right === "slide2") ? "slide3" : "slide1" ;

        this.setState({
            left: newLeft,
            active: newCenter,
            right: newRight
        });
    }

    right()
    {
        var left = this.refs[ this.state.left ];
        left.classList.remove( 'left', 'center', 'right' );
        left.classList.add( 'right' );

        var center = this.refs[ this.state.active ];
        center.classList.remove( 'left', 'center', 'right' );
        center.classList.add( 'left' );

        var right = this.refs[ this.state.right ];
        right.classList.remove( 'left', 'center', 'right' );
        right.classList.add( 'center' );
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