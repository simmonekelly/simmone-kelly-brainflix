import React from 'react';
import avatar from '../../assets/images/Mohan-muruge.jpg';
import searchIcon from '../../assets/images/icons/search.svg';

function HeaderForm() {
    return (
        <form id="header-form__search" className="header-form">
            <div className="form-field">
                <input type="text" name="header_search" id="search" placeholder="Search" />
            </div>
            <img src={avatar} className="form-avatar" />
        </form>
    )
}

export default HeaderForm
