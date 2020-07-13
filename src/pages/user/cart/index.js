import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import Table from 'react-bootstrap/Table'
import Navbar from '../../product_nav/index';
import Image from '../../../assets/products/10.png'

const Index = () => {
    return (
        <div className="cart">
            <Navbar />
            {/* Cart Header */}
            <div className="header">
                <div className="flex-center flex-column">
                    <h5 className="mb-0">Your Shopping Cart</h5>
                </div>
            </div>
            {/* Cart Body */}
            <div className="cart_body py-3">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <Table borderless responsive>
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th className="text-center">Price</th>
                                        <th className="text-center">Quantity</th>
                                        <th className="text-center">Total</th>
                                        <th className="text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div className="d-flex">
                                                <div><img src={Image} alt="product" /></div>
                                                <div className="pl-3 pt-3 pt-md-5">
                                                    <p className="mb-0">KTM RC 125</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-center pt-5"><p className="mb-0">115</p></td>
                                        <td className="text-center pt-5">
                                            <div className="d-flex">
                                                <div>
                                                    <button type="button" className="btn btn-sm text-muted btn-light rounded-0 shadow-none"><i className="fas fa-minus"></i></button>
                                                </div>
                                                <div>
                                                    <button type="button" className="btn btn-sm text-dark btn-light rounded-0 shadow-none" disabled><p className="mb-0">2</p></button>
                                                </div>
                                                <div>
                                                    <button type="button" className="btn btn-sm text-muted btn-light rounded-0 shadow-none"><i className="fas fa-plus"></i></button>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-center pt-5">
                                            <p className="mb-0">115</p>
                                        </td>
                                        <td className="text-center pt-5">
                                            <button className="btn btn-light text-danger btn-sm rounded-0 shadow-none"><i className="fas fa-times"></i></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-flex">
                                                <div><img src={Image} alt="product" /></div>
                                                <div className="pl-3 pt-3 pt-md-5">
                                                    <p className="mb-0">KTM RC 125</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-center pt-5"><p className="mb-0">115</p></td>
                                        <td className="text-center pt-5">
                                            <div className="d-flex">
                                                <div>
                                                    <button type="button" className="btn btn-sm text-muted btn-light rounded-0 shadow-none"><i className="fas fa-minus"></i></button>
                                                </div>
                                                <div>
                                                    <button type="button" className="btn btn-sm text-dark btn-light rounded-0 shadow-none" disabled><p className="mb-0">2</p></button>
                                                </div>
                                                <div>
                                                    <button type="button" className="btn btn-sm text-muted btn-light rounded-0 shadow-none"><i className="fas fa-plus"></i></button>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-center pt-5">
                                            <p className="mb-0">115</p>
                                        </td>
                                        <td className="text-center pt-5">
                                            <button className="btn btn-light text-danger btn-sm rounded-0 shadow-none"><i className="fas fa-times"></i></button>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                        <div className="col-12">
                            <div className="card rounded-0 border-0 shadow-none text-right">
                                <div className="card-body pt-0">
                                    <div className="mb-3">
                                        <h6>Total: 500 Tk</h6>
                                    </div>
                                    <div>
                                        <Link to="/checkout" className="btn px-4 px-md-5 shadow-none rounded-0">proceed to checkout</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Index;