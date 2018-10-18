// @flow
import React from 'react';
import './index.css';

class TechUsed extends React.Component {
    render() {
        return (
            <div className="tech-used-container">
                <span className="">React</span>
                <span className="">Node.js</span>
                <span className="">MongoDB</span>
                <span className="">Body-Parser</span>
                <span className="">Express</span>
                <span className="">Nodemon</span>
            </div>
        );
    }
}

export default TechUsed;