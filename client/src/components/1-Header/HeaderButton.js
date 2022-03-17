import React from 'react'
import UploadIcon from '../../assets/images/icons/upload.svg';
import {Link} from 'react-router-dom';

function HeaderButton() {
    return (
        <Link to="/upload" className="header-button_link">
            <button type="submit" className="header-button">
                <img src={"http://localhost:8080/images/icons/upload.svg"} className="header-button_logo" alt="upload" />
                <p>UPLOAD</p>
            </button>
        </Link>
    )
}

export default HeaderButton
