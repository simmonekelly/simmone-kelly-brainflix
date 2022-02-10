import React from 'react'
import BrainFlixLogo from '../../assets/images/logos/BrainFlix-logo.svg';
import {BrowserRouter, Link} from 'react-router-dom'

function HeaderLogo() {
    return (
        <Link to="/">
            <img src={BrainFlixLogo} className="site-logo header-logo" alt="logo" />
        </Link>
    )
}

export default HeaderLogo
