import React from 'react';
import './header-section.scss';
import HeaderButton from './HeaderButton';
import HeaderForm from './HeaderForm';
import HeaderLogo from './HeaderLogo';
import avatar from '../../assets/images/Mohan-muruge.jpg';

function Header() {
    return (
        <section className="header">
            <HeaderLogo />
            <HeaderForm avatar={avatar} />
            <HeaderButton />
            <img src={"http://localhost:8080/images/Mohan-muruge.jpg"} className="header-form_avatar tablet-avatar" />
        </section>
    )
}

export default Header
