import React from 'react'

function Navbar(props) {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid ml-5 ">
                    <a className="navbar-brand" href="#">Julian Sgarzi</a>
                    <div className= " row ml-auto mr-5 font-weight-bold">
                        <div className="navbar-nav ml-5 mb-2 mb-lg-0">
                            <a className="nav-link active" aria-current="page" onClick={props.sort}>Home</a>
                        </div>
                        <div className="navbar-nav ml-5 mb-2 mb-lg-0">
                            <a className="nav-link active" aria-current="page" onClick={props.sort}>About</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
