import React, { Component } from 'react';
import './style.css';
import Table from 'react-bootstrap/Table';
import { Link, NavLink } from 'react-router-dom';

class OrderIndex extends Component {
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
                        <div className="col-12 pb-2">
                            <div className="row">
                                <div className="col-6 col-md-4 col-lg-2 p-0 px-lg-2">
                                    <NavLink to="/" className="btn btn-block border rounded-0 shadow-sm">New Orders <small className="bg-warning rounded-circle p-1">10</small></NavLink>
                                </div>
                                <div className="col-6 col-md-4 col-lg-2 p-0 px-lg-2">
                                    <NavLink to="/" className="btn btn-block border rounded-0 shadow-sm">Payment Pending <small className="bg-warning rounded-circle p-1">10</small></NavLink>
                                </div>
                                <div className="col-6 col-md-4 col-lg-2 p-0 px-lg-2">
                                    <NavLink to="/" className="btn btn-block border rounded-0 shadow-sm">Processing <small className="bg-warning rounded-circle p-1">10</small></NavLink>
                                </div>
                                <div className="col-6 col-md-4 col-lg-2 p-0 px-lg-2">
                                    <NavLink to="/" className="btn btn-block border rounded-0 shadow-sm">Shipped <small className="bg-warning rounded-circle p-1">10</small></NavLink>
                                </div>
                                <div className="col-6 col-md-4 col-lg-2 p-0 px-lg-2">
                                    <NavLink to="/" className="btn btn-block border rounded-0 shadow-sm">Delivered <small className="bg-warning rounded-circle p-1">10</small></NavLink>
                                </div>
                                <div className="col-6 col-md-4 col-lg-2 p-0 px-lg-2">
                                    <NavLink to="/" className="btn btn-block border rounded-0 shadow-sm">Cancled <small className="bg-warning rounded-circle p-1">10</small></NavLink>
                                </div>
                            </div>
                        </div>
                        {/* End Order Types Links */}

                        {/* Order List Table */}
                        <div className="col-12 p-0 p-lg-2">
                            <Table responsive bordered size="sm" className="table shadow-sm">
                                <thead>
                                    <tr>
                                        <td className="text-center">ORDER ID</td>
                                        <td>Name</td>
                                        <td>Delivery</td>
                                        <td className="text-center">Total</td>
                                        <td>Payment</td>
                                        <td className="text-center">Status</td>
                                        <td className="text-center">Date</td>
                                        <td className="text-center">View</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="text-center pt-2">1</td>
                                        <td className="text-capitalize pt-2">abdullah al mamun</td>
                                        <td className="text-capitalize pt-2">savar</td>
                                        <td className="text-center pt-2">1200$</td>
                                        <td className="pt-2">Bkash</td>
                                        <td className="text-center pt-2">
                                            <span className="bg-warning px-2 py-1 text-white">Pending</span>
                                        </td>
                                        <td className="text-center text-capitalize pt-2">07 may 2020</td>
                                        <td className="text-center">
                                            <Link to={`/admin/category/${2}/edit`} type="button" className="btn btn-sm btn-light rounded-0 shadow-none text-info"><i className="fas fa-eye"></i></Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-center pt-2">1</td>
                                        <td className="text-capitalize pt-2">abdullah al mamun</td>
                                        <td className="text-capitalize pt-2">savar</td>
                                        <td className="text-center pt-2">1200$</td>
                                        <td className="pt-2">Bkash</td>
                                        <td className="text-center pt-2">
                                            <span className="bg-warning px-2 py-1 text-white">Pending</span>
                                        </td>
                                        <td className="text-center text-capitalize pt-2">07 may 2020</td>
                                        <td className="text-center">
                                            <Link to={`/admin/category/${2}/edit`} type="button" className="btn btn-sm btn-light rounded-0 shadow-none text-info"><i className="fas fa-eye"></i></Link>
                                        </td>
                                    </tr>

                                </tbody>

                            </Table>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default OrderIndex;