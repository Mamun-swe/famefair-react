
import React, { Component } from 'react';
import "./index.css";
import $ from 'jquery'
import logo from '../../assets/static/logo.png'
let scrollAmount = 0;

class sideMenu extends Component {
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, true);
    }

    handleScroll = () => {
        scrollAmount = window.scrollY;
        if (scrollAmount > 50) {
            $('.search-bar').addClass("mobileSticky")
        } else {
            $('.search-bar').removeClass("mobileSticky")
        }
    }


    render() {
        return (

            <div className="side-menu-index">
                {/* Desktop Side Menu */}
                <div className="side-menu d-none d-lg-block">
                    <div className="menu-option bg-uniq uniq-shadow py-4 px-3">
                        <div className="text-center mb-4">
                            <img src={logo} className="img-fluid" alt="logo" />
                        </div>
                        <div className="user-section mb-4 text-center">
                            <a href="#">
                                <i className="fa fa-user"></i>
                            </a>
                            <a href="#">
                                <i className="fas fa-shopping-cart"></i>
                            </a>
                        </div>
                        <div className="search-box">
                            <form>
                                <div className="input-group">
                                    <input
                                        type="text"
                                        className="form-control form-control-sm shadow-none"
                                        placeholder="Search for ..."
                                    />
                                    <div className="input-group-prepend">
                                        <button type="submit" className="btn btn-sm shadow-none">
                                            <i className="fas fa-search"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="links text-center">
                            <a href="#">home</a>
                            <div>
                                <a href="#">chair</a>
                                <a href="#">accessories</a>
                                <a href="#">cloths</a>
                                <a href="#">women</a>
                                <a href="#">men</a>
                                <a href="#">food</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Desktop Side Menu */}

                {/* Mobile Menu */}
                {/* Mobile Top Menu  */}
                <div className="mobile-menu d-lg-none shadow-sm">
                    <div className="top-nav">
                        <div className="d-flex justify-content-between px-3 pt-3 pb-2">
                            <div>
                                <i className="fas fa-bars"></i>
                            </div>
                            <div>
                                <a href="#">
                                    <img src={logo} className="img-fluid" />
                                </a>
                            </div>
                            <div>
                                <i className="far fa-user"></i>
                            </div>
                        </div>
                    </div>
                    {/* Search Bar */}
                    <div className="search-bar p-3">
                        <form>
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control form-control-sm shadow-none"
                                    placeholder="Search for ..."
                                />
                                <div className="input-group-prepend">
                                    <button type="submit" className="btn btn-sm shadow-none">
                                        <i className="fas fa-search"></i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                {/* Mobile Sidebar */}
                <div className="mobile-side-bar d-lg-none">
                    <div className="main-content">
                        <div className="close-area text-right">
                            <i className="fas fa-times"></i>
                        </div>
                        <div className="content my-4 p-3">
                            <h4 className="mb-4 text-center">Search in:</h4>
                            <div className="search-box mb-5">
                                <form>
                                    <div className="input-group">
                                        <input type="text" className="form-control shadow-none" placeholder="Search for ..." />
                                        <div className="input-group-prepend">
                                            <button type="submit" className="btn shadow-none">
                                                <i className="fas fa-search"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="links">
                                <a href="#">home</a>
                                <div>
                                    <a href="#">chair</a>
                                    <a href="#">accessories</a>
                                    <a href="#">cloths</a>
                                    <a href="#">women</a>
                                    <a href="#">men</a>
                                    <a href="#">food</a>
                                </div>
                            </div>
                            <br />
                            <br />
                            <div className="links">
                                <a href="#">Login / Register</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Mobile Sidebar */}
                {/* End Mobile Menu */}
            </div>
        );
    }
}

export default sideMenu