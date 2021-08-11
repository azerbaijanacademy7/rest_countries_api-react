import React from 'react';
import darkIcon from '../../assets/images/icons/dark-icon.svg'
import './Header.scss';

export const Header = () => {
    return(
        <div className="header">
            <p className="header_title">Where in the world?</p>
            <div className="dark_mode">
                <img src={darkIcon} alt="dark mode icon" className="dark_icon"/>
                <p className="dark_mode_text">Dark Mode</p>
            </div>
        </div>
    )
}

export default Header;