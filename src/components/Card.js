import React from 'react';
import logo from '../images/jigsaw_logo.svg';
import logo_adalab from '../images/logo-adalab.png';
import '../App.scss';
import Footer from './Footer';
import HeaderCard from './HeaderCard';
import MainCard from './MainCard';

class Card extends React.Component {
    render(){
        const mainContent = (
            <div className="page">
                <HeaderCard logo = {logo} />
                <MainCard />
                <Footer logo_adalab={logo_adalab}/>
            </div>
        );
        return mainContent;
    }
}

export default Card;