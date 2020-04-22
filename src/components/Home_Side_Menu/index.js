
import React, { Component } from 'react';
import "./index.css";
import $ from 'jquery'
import logo from '../../assets/static/logo.png'
import { Link } from 'react-router-dom';
let scrollAmount = 0;

class sideMenu extends Component {
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, true);
    }

    handleScroll = () => {
        scrollAmount = window.scrollY;
        if (scrollAmount > 50) {
            $('.mobile_top_search_bar').addClass("mobileSticky")
        } else {
            $('.mobile_top_search_bar').removeClass("mobileSticky")
        }
    }


    render() {
        return (

            <div className="side-menu-index">
                {/* Desktop Side Menu */}
                <div className="side-menu d-none d-lg-block">
                    <div className="menu-option bg-uniq uniq-shadow py-4 px-3">
                        <div className="text-center mb-4">
                            <img src={logo} className="img-fluid" alt="Logo" />
                        </div>
                        <div className="user-section mb-4 text-center">
                            <Link to="/">
                                <i className="fa fa-user"></i>
                            </Link>
                            <Link to="/cart">
                                <i className="fas fa-shopping-cart"></i>
                            </Link>
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
                            <Link to="/">home</Link>
                            <div>
                                <Link to="/">chair</Link>
                                <Link to="/">accessories</Link>
                                <Link to="/">cloths</Link>
                                <Link to="/">women</Link>
                                <Link to="/">men</Link>
                                <Link to="/">food</Link>
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
                                <Link to="/">
                                    <img src={logo} className="img-fluid" alt="Logo" />
                                </Link>
                            </div>
                            <div>
                                <i className="far fa-user"></i>
                            </div>
                        </div>
                    </div>
                    {/* Search Bar */}
                    <div className="search-bar mobile_top_search_bar p-3">
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
                                <Link to="/">home</Link>
                                <div>
                                    <Link to="/">chair</Link>
                                    <Link to="/">accessories</Link>
                                    <Link to="/">cloths</Link>
                                    <Link to="/">women</Link>
                                    <Link to="/">men</Link>
                                    <Link to="/">food</Link>
                                </div>
                            </div>
                            <br />
                            <br />
                            <div className="links">
                                <Link to="/">Login / Register</Link>
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