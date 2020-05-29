import React, { Component } from 'react';
import './style.css';

import NewOrders from './new-order/index';
import PaymentPending from './payment-pending/index';
import ProcessingOrders from './processing/index';

import { Switch, Route, NavLink } from "react-router-dom";



class AdminOrderMaster extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <div className="container-fluid order_index">
                    <div className="row">
                        {/* Order Count */}
                        <div className="col-12 pt-1 pb-3 count_column">
                            <div className="row">
                                <div className="col-6 col-sm-3 p-0 px-lg-2">
                                    <div className="card rounded-0 shadow-sm">
                                        <div className="flex-center flex-column">
                                            <h5 className="mb-0 text-info">50</h5>
                                            <h6 className="mb-0">Today</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-sm-3 p-0 px-lg-2">
                                    <div className="card rounded-0 shadow-sm">
                                        <div className="flex-center flex-column">
                                            <h5 className="mb-0 text-primary">100</h5>
                                            <h6 className="mb-0">This Month</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-sm-3 p-0 px-lg-2">
                                    <div className="card rounded-0 shadow-sm">
                                        <div className="flex-center flex-column">
                                            <h5 className="mb-0 text-warning">100</h5>
                                            <h6 className="mb-0">This Year</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-sm-3 p-0 px-lg-2">
                                    <div className="card rounded-0 shadow-sm">
                                        <div className="flex-center flex-column">
                                            <h5 className="mb-0 text-success">1000</h5>
                                            <h6 className="mb-0">Total</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Order Types Links */}
                        <div className="col-12 pb-2 order_type_button_column">
                            <div className="row">
                                <div className="col-6 col-md-4 col-lg-2 p-0 px-lg-2">
                                    <NavLink to="/admin/orders/" activeClassName="is-active" className="btn btn-block border rounded-0 shadow-sm">Today Orders <small className="bg-warning rounded-circle p-1">10</small></NavLink>
                                </div>
                                <div className="col-6 col-md-4 col-lg-2 p-0 px-lg-2">
                                    <NavLink to="/admin/orders/payment-pending" activeClassName="is-active" className="btn btn-block border rounded-0 shadow-sm">Payment Pending <small className="bg-warning rounded-circle p-1">10</small></NavLink>
                                </div>
                                <div className="col-6 col-md-4 col-lg-2 p-0 px-lg-2">
                                    <NavLink to="/admin/orders/processing" activeClassName="is-active" className="btn btn-block border rounded-0 shadow-sm">Processing <small className="bg-warning rounded-circle p-1">10</small></NavLink>
                                </div>
                                <div className="col-6 col-md-4 col-lg-2 p-0 px-lg-2">
                                    <NavLink to="/" type="button" className="btn btn-block border rounded-0 shadow-sm">Shipped <small className="bg-warning rounded-circle p-1">10</small></NavLink>
                                </div>
                                <div className="col-6 col-md-4 col-lg-2 p-0 px-lg-2">
                                    <NavLink to="/" type="button" className="btn btn-block border rounded-0 shadow-sm">Delivered <small className="bg-warning rounded-circle p-1">10</small></NavLink>
                                </div>
                                <div className="col-6 col-md-4 col-lg-2 p-0 px-lg-2">
                                    <NavLink to="/" type="button" className="btn btn-block border rounded-0 shadow-sm">Cancled <small className="bg-warning rounded-circle p-1">10</small></NavLink>
                                </div>


                            </div>
                        </div>
                        {/* End Order Types Links */}
                    </div>
                    <Switch>
                        <Route exact path="/admin/orders/" component={NewOrders} />
                        <Route exact path="/admin/orders/payment-pending" component={PaymentPending} />
                        <Route exact path="/admin/orders/processing" component={ProcessingOrders} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default AdminOrderMaster;