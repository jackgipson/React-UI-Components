import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import HeaderTitle from './components/HeaderComponents/HeaderTitle';
import HeaderContent from './components/HeaderComponents/HeaderContent';
import ImageThumbnail from './components/HeaderComponents/ImageThumbnail';

import CardContainer from './components/CardComponents/CardContainer';
import CardBanner from './components/CardComponents/CardBanner';
import CardContent from './components/CardComponents/CardContent';

import Footer from './components/FooterComponents/Footer';

//import "./index.css";

function Card() {
    return (
        <div className='HeaderContainer'>
        <div className='Lambda-Image'>
        <ImageThumbnail />
        <div className='Content'>
        <HeaderTitle />
        <HeaderContent />
        </div>
        </div>
        <CardContainer />
        <CardBanner />
        <CardContent />
        <Footer />
        </div>
    )
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Card />, rootElement);

//ReactDOM.render(<App />, document.getElementById('root'));
