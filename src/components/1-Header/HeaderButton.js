import React from 'react'
import UploadIcon from '../../assets/images/icons/upload.svg';

function HeaderButton() {
    return (
        <button type="submit" className="header-button">
            <img src={UploadIcon} className="header-button_logo" alt="upload" />
            <p>UPLOAD</p>
        </button>
    )
}

export default HeaderButton
