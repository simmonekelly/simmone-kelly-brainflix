import React from 'react';
import searchIcon from '../../assets/images/icons/search.svg';

function HeaderForm(props) {
    return (
        <form id="header-form__search" className="header-form">
            <div className="header-form_field">
                <input type="text" name="header_search" id="search" placeholder="Search" />
            </div>
            <img src={props.avatar} className="header-form_avatar mobile-avatar" />
        </form>
    )
}

export default HeaderForm
