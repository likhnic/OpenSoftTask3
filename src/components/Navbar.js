import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg fixed-top" style={{ backgroundColor: "white" }}>
                <div className="container-fluid" >
                    <a className="navbar-brand" href="#">
                        <img src="./index.png" alt="Restaurant" style={{width:"100px"}}/>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="#home" style={{fontWeight:"bold"}}>Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#about" style={{fontWeight:"bold"}}>About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#menu" style={{fontWeight:"bold"}}>Menu</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#chefs" style={{fontWeight:"bold"}}>Chefs</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#week" style={{fontWeight:"bold"}}>Weeks Special</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact" style={{fontWeight:"bold"}}>Contact Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#cart" style={{fontWeight:"bold"}}>Cart</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar