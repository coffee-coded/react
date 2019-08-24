import React from 'react'
import './Nav.css'
import './bootstrap.min.css'
const toolbar = (props) => {
    return(
        <header>
            <nav className="navbar navbar-dark navbar-expand-lg bg-dark" id="mainNav">
                <div className="container"><a className="navbar-brand" href="#page-top">Brand</a>
                    <button data-toggle="collapse" data-target="#navbarResponsive"
                            className="navbar-toggler navbar-toggler-right" type="button" data-toogle="collapse"
                            aria-controls="navbarResponsive" aria-expanded="false"
                            aria-label="Toggle navigation"><i className="fa fa-bars"></i></button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="nav navbar-nav ml-auto text-uppercase">
                            <li className="nav-item" role="presentation"><a className="nav-link js-scroll-trigger"
                                                                            href="#services">Services</a></li>
                            <li className="nav-item" role="presentation"><a className="nav-link js-scroll-trigger"
                                                                            href="#portfolio">Portfolio</a></li>
                            <li className="nav-item" role="presentation"><a className="nav-link js-scroll-trigger"
                                                                            href="#about">About</a></li>
                            <li className="nav-item" role="presentation"><a className="nav-link js-scroll-trigger"
                                                                            href="#team">Team</a></li>
                            <li className="nav-item" role="presentation"><a className="nav-link js-scroll-trigger"
                                                                            href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>

        </header>
    );

};

export default toolbar;