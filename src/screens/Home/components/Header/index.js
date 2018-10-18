// @flow
import React from 'react';
import './index.css';

class Header extends React.Component {
    render() {
        return (
            <div className="project-header">
                <span className="author-name">WIKUS VAN DER WESTHUIZEN</span>
                <span className="author-projects">github.com/waitwathuh</span>
            </div>
        );
    }
}

export default Header;