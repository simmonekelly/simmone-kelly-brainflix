import React from 'react'
import UploadLogo from '../../assets/images/icons/upload.svg';

function HeaderButton() {
    return (
        <button type="submit" className="header-button">
            <img src={UploadLogo} className="header-button_logo" alt="upload" />
            <p>UPLOAD</p>
        </button>
    )
}

export default HeaderButton
