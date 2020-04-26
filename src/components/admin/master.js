import React, { Component } from 'react';
import './style.css';

import Dashboard from './dashboard/index';
// Banner
import Banner from './banner/index';
import BannerCreate from './banner/create';

import { Switch, Route, Link } from "react-router-dom";

import Logo from '../../assets/static/logo.png';
import User from '../../assets/static/user.jpg';

class AdminMaster extends Component {
    constructor(props) {
        super(props);
        this.state = {}
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
                                        <button type="button" className="btn btn-light rounded-circle shadow-none mx-2">
                                            <i className="fas fa-bars"></i>
                                        </button>
                                        <button type="button" className="btn btn-light rounded-circle shadow-none ml-2 mr-3 mr-lg-4 message_btn">
                                            <i className="fas fa-bell"></i>
                                            <span className="message_count">10+</span>
                                        </button>

                                        <img src={User} alt="Logged User" className="user_img rounded-circle" />
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
                        <Link to="/">categories</Link>
                        <Link to="/">orders</Link>
                    </div>
                    {/* Main section */}
                    <div className="main_section">
                        <Switch>
                            <Route exact path="/admin/" component={Dashboard} />

                            {/* Banner Routes */}
                            <Route exact path="/admin/banner" component={Banner} />
                            <Route exact path="/admin/banner/create" component={BannerCreate} />

                            <Route component={Dashboard} />
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}

export default AdminMaster;