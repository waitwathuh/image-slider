// @flow
import { Container } from 'unstated';

class Sliders extends Container {
    constructor(props) {
        super(props);
    
        // setInterval(() => this.setState({contentCount: this.state.contentCount + 1}), 1000);
        setInterval(() => this.setState({previousContent: true}), 2000);
      }

    state = {
        contentCount: 5,
        contentNumber: 1,
        imageLocations: [],
        textBlobs: [],
        imageCredits: [],
        nextContent: false,
        previousContent: false
    }

    // START
    updateContentNumber(newValue) {
        this.setState({
            contentNumber: newValue
        });
    }

    updateNextContent(newValue) {
        this.setState({
            nextContent: newValue
        });
    }

    updatePreviousContent(newValue) {
        this.setState({
            previousContent: newValue
        });
    }
    // STOP

    getImageLocation(imgNumber) {
        return "https://picsum.photos/200/200/?image=" + imgNumber;
    }
}

export default new Sliders();