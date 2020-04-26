import React, { Component } from 'react';
import './master.css';

import Navbar from '../../product_nav/index';
import History from './history/index';
import Me from './me/index';
import Password from './password/index';

import { Switch, Route, Link } from "react-router-dom";


class AccountMaster extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <Navbar />
                <div className="mt-lg-5 pt-3 pt-lg-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="d-flex links_button">
                                    <div className="flex-fill pr-1 pr-md-2">
                                        <Link to="/account/" className="btn btn-block rounded-0 shadow-sm">Order History</Link>
                                    </div>
                                    <div className="flex-fill px-1 px-md-2">
                                        <Link to="/account/me" className="btn btn-block rounded-0 shadow-sm">View Profile</Link>
                                    </div>
                                    <div className="flex-fill pl-1 pl-md-2">
                                        <Link to="/account/change-password" className="btn btn-block rounded-0 shadow-sm">Change Password</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

                <Switch>
                    <Route exact path="/account/" component={History} />
                    <Route exact path="/account/me" component={Me} />
                    <Route exact path="/account/change-password" component={Password} />
                </Switch>
            </div>
        );
    }
}

export default AccountMaster;