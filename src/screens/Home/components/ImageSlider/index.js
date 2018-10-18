// @flow
import React from 'react';
import { Subscribe } from 'unstated';
import './index.css';
import sliders from './../../../../handlers/sliders';

class ImageSlider extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            loaded: false,
            imgOneActive: true
        }

        setInterval(() => 
            this.something()
        , 200);
    }

    something() {
        var image1 = document.getElementById("image1");
        var image2 = document.getElementById("image2");

        if (sliders.state.nextContent) {
            if (this.state.imgOneActive) {
                image2.src = this.getImageLocation(sliders.state.contentNumber + 1);

                image2.classList.remove("top", "center", "bottom",  "transition");
                image2.classList.add("top");

                setTimeout(() => {
                    image1.classList.remove("top", "center", "bottom",  "transition");
                    image1.classList.add("bottom",  "transition");
                    
                    image2.classList.remove("top", "center", "bottom", "transition");
                    image2.classList.add("center", "transition");
                }, 1);
            } else {
                image1.src = this.getImageLocation(sliders.state.contentNumber + 1);

                image1.classList.remove("top", "center", "bottom", "transition");
                image1.classList.add("top");

                setTimeout(() => {
                    image2.classList.remove("top", "center", "bottom",  "transition");
                    image2.classList.add("bottom",  "transition");

                    image1.classList.remove("top", "center", "bottom", "transition");
                    image1.classList.add("center", "transition");
                }, 1);
            }

            this.setState({imgOneActive: !this.state.imgOneActive});
            sliders.updateNextContent(false);
            sliders.updatePreviousContent(false);
            sliders.updateContentNumber(sliders.state.contentNumber + 1);
        } else if(sliders.state.previousContent) {
            console.log( "Load the previous content..." );

            if (this.state.imgOneActive) {
                image2.src = this.getImageLocation(sliders.state.contentNumber - 1);

                image2.classList.remove("top", "center", "bottom",  "transition");
                image2.classList.add("bottom");

                setTimeout(() => {
                    image1.classList.remove("top", "center", "bottom",  "transition");
                    image1.classList.add("top",  "transition");
                    
                    image2.classList.remove("top", "center", "bottom", "transition");
                    image2.classList.add("center", "transition");
                }, 1);
            } else {
                image1.src = this.getImageLocation(sliders.state.contentNumber - 1);

                image1.classList.remove("top", "center", "bottom", "transition");
                image1.classList.add("bottom");

                setTimeout(() => {
                    image2.classList.remove("top", "center", "bottom",  "transition");
                    image2.classList.add("top",  "transition");

                    image1.classList.remove("top", "center", "bottom", "transition");
                    image1.classList.add("center", "transition");
                }, 1);
            }

            this.setState({imgOneActive: !this.state.imgOneActive});
            sliders.updateNextContent(false);
            sliders.updatePreviousContent(false);
            sliders.updateContentNumber(sliders.state.contentNumber + 1);
        }

        
    }

    getImageLocation(imgNumber) {
        return sliders.getImageLocation(imgNumber);
    }

    render() {
        return (
            <Subscribe to={[sliders]}>
                {sliders => (
                    <div className="image-slider-container" >
                        <img id="image1" alt="image1" className="center transition" src={this.getImageLocation(1)} onClick={() => sliders.updateNextContent(true)}/>
                        <img id="image2" alt="image2" className="top transition" src={this.getImageLocation(2)} onClick={() => sliders.updateNextContent(true)}/>
                        <button className="randomise">RANDOMISE</button>
                    </div>
                )}
            </Subscribe>
        );
    }
}

export default ImageSlider;