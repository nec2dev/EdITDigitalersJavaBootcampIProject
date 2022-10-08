import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="blue-grey bg-primary text-white">
            <div className="nav-wrapper container d-flex justify-content-end w-12">
                <Link to="#" className="">B:L:O:G</Link>
                <ul id="avatar" className="right list-unstyled">
                    <li><Link to="#!"><span>1</span><i className="material-icons right">email</i></Link></li>
                    <li>
                        <img className="rounded-circle" src="https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg" /></li>
                </ul>
            </div>
        </header>
    );
}
export default Header;