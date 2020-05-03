import React, { Component } from 'react';
import './style.css';
import { Switch, Route, Link } from "react-router-dom";
import $ from 'jquery';

import Dashboard from './dashboard/index';
// Banner
import Banner from './banner/index';
import BannerCreate from './banner/create';
// Category
import CategoryIndex from './category/index';
import CategoryCreate from './category/create';
import CategoryEdit from './category/edit';
// Product
import ProductIndex from './product/index';
import ProductCreate from './product/create';


import Logo from '../../assets/static/logo.png';
import User from '../../assets/static/user.jpg';

class AdminMaster extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        $('.dropdown-box').hide()
        $('.notification_box').hide()
        $('.profile_drop_box').hide()
    }

    handleSideMenu() {
        $('.side_bar').toggleClass('side_bar_hide', 'slow');
        $('.main_section').toggleClass('side_main_section', 'slow')
    }

    handleNotification() {
        // $('.notification_box').slideToggle()
        $('.notification_box').fadeToggle('50')
    }

    handleProfileToggle() {
        $('.profile_drop_box').fadeToggle('50')
    }

    handleDropDown() {
        $('.dropdown-box').slideToggle()
    }
    render() {
        return (
            <div className="admin-master">
                {/* Top Bar */}
                <div className="top_bar py-3 shadow-sm">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="d-flex">
                                    <div>
                                        <Link to="/">
                                            <img src={Logo} alt="Company Logo" className="logo_img" />
                                        </Link>
                                    </div>
                                    <div className="ml-auto">
                                        <ul>
                                            <li>
                                                {/* Side Menu button */}
                                                <button type="button" className="btn btn-light rounded-circle shadow-none mx-2" onClick={this.handleSideMenu}>
                                                    <i className="fas fa-bars"></i>
                                                </button>
                                            </li>
                                            <li>
                                                {/* Notifications Button */}
                                                <button type="button" className="btn btn-light rounded-circle shadow-none ml-2 mr-3 mr-lg-4 notification_btn" onClick={this.handleNotification}>
                                                    <i className="fas fa-bell"></i>
                                                    <span className="notification_count">10+</span>
                                                </button>
                                                {/* Notifications Box */}
                                                <div className="notification_box bg-white shadow-sm border">
                                                    <div className="tri_angle shadow-sm"></div>
                                                    <div className="titel_bar px-2 py-1">
                                                        <p className="mb-0 text-white">Notifications</p>
                                                    </div>
                                                    <div className="notification_body">
                                                        <Link to="/"><p className="mb-0">Lorem ispum 1</p></Link>
                                                        <Link to="/"><p className="mb-0">Lorem ispum</p></Link>
                                                        <Link to="/"><p className="mb-0">Lorem ispum</p></Link>
                                                        <Link to="/"><p className="mb-0">Lorem ispum</p></Link>
                                                        <Link to="/"><p className="mb-0">Lorem ispum</p></Link>
                                                        <Link to="/"><p className="mb-0">Lorem ispum</p></Link>
                                                        <Link to="/"><p className="mb-0">Lorem ispum</p></Link>
                                                        <Link to="/"><p className="mb-0">Lorem ispum</p></Link>
                                                        <Link to="/"><p className="mb-0">Lorem ispum</p></Link>
                                                        <Link to="/"><p className="mb-0">Lorem ispum</p></Link>
                                                        <Link to="/"><p className="mb-0">Lorem ispum</p></Link>
                                                        <Link to="/"><p className="mb-0">Lorem ispum</p></Link>
                                                        <Link to="/"><p className="mb-0">Lorem ispum</p></Link>
                                                        <Link to="/"><p className="mb-0">Lorem ispum</p></Link>
                                                        <Link to="/"><p className="mb-0">Lorem ispum</p></Link>
                                                        <Link to="/"><p className="mb-0">Lorem ispum end</p></Link>
                                                    </div>
                                                    <div className="notification_footer border-top px-2 py-1">
                                                        <Link to="">See All</Link>
                                                    </div>
                                                </div>
                                                {/* End Notifications Box */}
                                            </li>
                                            <li>
                                                <div className="user_section">
                                                    <img src={User} alt="Logged User" className="user_img rounded-circle" onClick={this.handleProfileToggle} />
                                                    <div className="profile_drop_box bg-white shadow-sm border">
                                                        <Link to="/" className="btn btn-block rounded-0 shadow-none text-left pl-2"><i className="fas fa-cog mr-1"></i>Profile</Link>
                                                        <button type="button" className="btn btn-block rounded-0 shadow-none text-left pl-2"><i className="fas fa-sign-out-alt mr-1"></i>Logout</button>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main_menu">
                    {/* Side Bar */}
                    <div className="side_bar shadow-sm">
                        <Link to="/admin/">dashboard</Link>
                        <Link to="/admin/banner">Banner</Link>
                        <Link to="/admin/category">categories</Link>
                        <button type="button" className="btn btn-block text-left rounded-0 shadow-none" onClick={this.handleDropDown}>Products</button>
                        {/* Category in dropdown */}
                        <div className="dropdown-box bg-white shadow-sm px-3">
                            <div className="py-3">
                                <Link to={`/admin/category/${2}/products`}>men fashion</Link>
                                <Link to={`/admin/category/${2}/products`}>women fashion</Link>
                                <Link to={`/admin/category/${2}/products`}>t-shirt</Link>
                            </div>
                        </div>
                        <Link to="/">orders</Link>
                    </div>
                    {/* Main section */}
                    <div className="main_section">
                        <Switch>
                            <Route exact path="/admin/" component={Dashboard} />

                            {/* Banner Routes */}
                            <Route exact path="/admin/banner" component={Banner} />
                            <Route exact path="/admin/banner/create" component={BannerCreate} />
                            {/* Category Routes */}
                            <Route exact path="/admin/category" component={CategoryIndex} />
                            <Route exact path="/admin/category/create" component={CategoryCreate} />
                            <Route exact path="/admin/category/:id/edit" component={CategoryEdit} />
                            {/* Product Routes */}
                            <Route exact path="/admin/category/:id/products" component={ProductIndex} />
                            <Route exact path="/admin/category/:id/products/create" component={ProductCreate} />

                            <Route component={Dashboard} />
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}

export default AdminMaster;