import React from 'react';
import './header-section.scss';
import HeaderButton from './HeaderButton';
import HeaderForm from './HeaderForm';
import HeaderLogo from './HeaderLogo';

function Header() {
    return (
        <section className="header">
            <HeaderLogo />
            <HeaderForm />
            <HeaderButton />
        </section>
    )
}

export default Header
