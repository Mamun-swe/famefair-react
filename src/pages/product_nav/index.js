import React, { Component } from 'react';
import './index.css';
import $ from 'jquery'
import Logo from '../../assets/static/logo.png';
import { Link } from 'react-router-dom';
let scrollAmount = 0;

class ProductNav extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, true);
    }

    handleScroll = () => {
        scrollAmount = window.scrollY;
        if (scrollAmount > 50) {
            $('.mobile_search_bar').addClass("mobileSticky")
        } else {
            $('.mobile_search_bar').removeClass("mobileSticky")
        }
    }
    render() {
        return (
            <div className="product_nav">
                <div className="custom-nav shadow-sm d-none d-lg-block">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 p-3">
                                <div className="d-flex justify-content-between">
                                    <div className="category-logo">
                                        <Link to="/">
                                            <img src={Logo} className="img-fluid" alt="Logo" />
                                        </Link>
                                    </div>
                                    <div className="search-bar">
                                        <form>
                                            <div className="input-group">
                                                <input
                                                    type="text"
                                                    className="form-control shadow-none"
                                                    placeholder="Search for ..."
                                                />
                                                <div className="input-group-prepend">
                                                    <button type="submit" className="btn shadow-none px-4">
                                                        <i className="fas fa-search"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="mt-1 accounts">
                                        <ul className="d-none d-lg-block">
                                            <li>
                                                <Link to="/cart">
                                                    <i className="fas fa-shopping-cart"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/account">
                                                    <i className="fas fa-user"></i>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
                                    <img src={Logo} className="img-fluid" alt="Logo" />
                                </Link>
                            </div>
                            <div>
                                <i className="far fa-user"></i>
                            </div>
                        </div>
                    </div>
                    {/* Search Bar */}
                    <div className="search-bar mobile_search_bar d-lg-none p-3">
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
                {/* End Mobile Menu */}
            </div>
        );
    }
}

export default ProductNav;