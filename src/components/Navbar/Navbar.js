import React from 'react'
import { Link } from 'react-router-dom';  

function Navbar(props) {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid ml-5 ">
                    <a className="navbar-brand">Julian Sgarzi</a>
                    <div className= " row ml-auto mr-5 font-weight-bold">
                        <div className="navbar-nav ml-5 mb-2 mb-lg-0">
                            <Link to="/" className="nav-link active" aria-current="page">Home</Link>
                        </div>
                        <div className="navbar-nav ml-5 mb-2 mb-lg-0">
                            <Link to="/about" className="nav-link active" aria-current="page">About</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
