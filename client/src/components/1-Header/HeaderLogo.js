import React from 'react'
import BrainFlixLogo from '../../assets/images/logos/BrainFlix-logo.svg';
import { Link } from 'react-router-dom'

function HeaderLogo() {

    return (
        <Link to="/">
            <img src={"http://localhost:8080/images/logos/BrainFlix-logo.svg"}
                className="site-logo header-logo"
                alt="logo"
                />
        </Link>
    )
}

export default HeaderLogo
