import React from 'react';
import logo from '../../images/jigsaw_logo.svg';
import logo_adalab from '../../images/logo-adalab.png';
import HeaderCard from './HeaderCard';
import MainCard from './MainCard';
import Footer from '../Footer';

class Card extends React.Component {
    render(){
        const {url, state, handleColor, handleInput, actionToHidden} = this.props;
        const mainContent = (
            <div className="page">
                <HeaderCard logo = {logo} />
                <MainCard url={url} state={state} handleColor={handleColor} handleInput={handleInput} actionToHidden={actionToHidden} />
                <Footer logo_adalab={logo_adalab}/>
            </div>
        );
        return mainContent;
    }
}

export default Card;