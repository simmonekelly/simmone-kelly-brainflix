import React from 'react'
import BrainFlixLogo from '../../assets/images/logos/BrainFlix-logo.svg';

function HeaderLogo() {
    return (
        <a href="">
            <img src={BrainFlixLogo} className="site-logo header-logo" alt="logo" />
        </a>
    )
}

export default HeaderLogo
