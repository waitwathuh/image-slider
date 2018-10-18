// @flow
import React from 'react';
import { Provider } from 'unstated';
import './index.css';

import Header from './components/Header/';
import Footer from './components/Footer/';
import AppLogo from './components/AppLogo/';
import LeftColumn from './components/LeftColumn/';
import TextSlider from './components/TextSlider/';
import TechUsed from './components/TechUsed/';
import ImageSlider from './components/ImageSlider/';
import ImageCredit from './components/ImageCredit/';

class Home extends React.Component {
    render() {
        return (
            <Provider>
                <div className="home-content">
                    <Header />
                    <Footer />
                    <AppLogo />
                    <LeftColumn />
                    <TextSlider />
                    <TechUsed />
                    <ImageSlider />
                    <ImageCredit />
                </div>
            </Provider>
        );
    }
}

export default Home;