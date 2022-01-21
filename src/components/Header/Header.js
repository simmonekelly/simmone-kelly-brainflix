import React from 'react';
import BrainFlixLogo from '../../assets/images/logos/BrainFlix-logo.svg';
import avatar from '../../assets/images/Mohan-muruge.jpg';

function Header() {
    return (
        <section>
            <div className="padding">
                <img src={BrainFlixLogo} className="site-logo" alt="logo" />
            </div>
            <div className="padding">
                <p>
                    search form
                </p>
                <img src={avatar} className="avatar" alt="logo" />
            </div>
        </section>
    )
}

export default Header
