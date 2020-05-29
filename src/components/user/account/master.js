import React, { Component } from 'react';
import './master.css';

import Navbar from '../../product_nav/index';
import History from './history/index';
import Me from './me/index';
import Password from './password/index';

import { Switch, Route, NavLink } from "react-router-dom";


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
                                        <NavLink exact to="/account/" activeClassName="is-active" className="btn btn-block rounded-0 shadow-sm">Order History</NavLink>
                                    </div>
                                    <div className="flex-fill px-1 px-md-2">
                                        <NavLink exact to="/account/me" activeClassName="is-active" className="btn btn-block rounded-0 shadow-sm">View Profile</NavLink>
                                    </div>
                                    <div className="flex-fill pl-1 pl-md-2">
                                        <NavLink exact to="/account/change-password" activeClassName="is-active" className="btn btn-block rounded-0 shadow-sm">Change Password</NavLink>
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