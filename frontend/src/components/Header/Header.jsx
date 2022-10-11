import React from 'react';

const Header = () => {
    return (
        <header className="blue-grey bg-primary text-light">
            <div className="nav-wrapper container d-flex justify-content-between">
            <img src={ require('../../assets/img/logo.png') } className="mt-3 W-50" />
                <ul id="avatar" className="right list-unstyled">
                    <li>
                        <img className="rm-3" src={ require('../../assets/img/user.png') } />
                    </li>
                    <li><label>Hi, <span authentication="name">Username</span></label></li>
                </ul>
            </div>
        </header>
    );
}
export default Header;