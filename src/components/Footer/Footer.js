import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <footer className="footer">
            <div className="containter-fluid">
                <div className="row justify-content-center">
                    <Link goTo="www.github.com/jsgarzi" className="active pr-2">Github Profile</Link>
                    <Link goTo="https://www.linkedin.com/in/julian-sgarzi-5048b6201/" className="active pl-2">Linkedin</Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer;