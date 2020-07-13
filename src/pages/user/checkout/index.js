import React from 'react';
import './index.css';
import Navbar from '../../product_nav/index';

const Index = () => {
    return (
        <div className="checkout">
            <Navbar />
            <div className="container pt-4 pt-lg-5">
                <div className="row">
                    <div className="col-12 col-lg-6 px-lg-5 pb-4">
                        <div className="mb-4">
                            <h6>BILLING ADDRESS</h6>
                        </div>
                        <div className="billing_form">
                            <form>
                                {/* Name */}
                                <div className="form-group mb-3 mb-lg-4">
                                    <label>name</label>
                                    <input type="text" className="form-control rounded-0 shadow-none" />
                                </div>

                                {/* Email */}
                                <div className="form-group mb-3 mb-lg-4">
                                    <label>Email</label>
                                    <input type="text" className="form-control rounded-0 shadow-none" />
                                </div>

                                {/* Phone no */}
                                <div className="form-group mb-3 mb-lg-4">
                                    <label>Phone no</label>
                                    <input type="text" className="form-control rounded-0 shadow-none" />
                                </div>

                                {/* Town/City */}
                                <div className="form-group mb-3 mb-lg-4">
                                    <label>Town/City</label>
                                    <input type="text" className="form-control rounded-0 shadow-none" />
                                </div>

                                {/* Address */}
                                <div className="form-group mb-3 mb-lg-4">
                                    <label>address</label>
                                    <input type="text" className="form-control rounded-0 shadow-none" />
                                </div>

                                {/* Post Code */}
                                <div className="form-group mb-3 mb-lg-4">
                                    <label>post code</label>
                                    <input type="text" className="form-control rounded-0 shadow-none" />
                                </div>

                            </form>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 pb-5">
                        <div className="card rounded-0">
                            <div className="card-header bg-white border-0 pt-4">
                                <h6>YOUR ORDER</h6>
                            </div>
                            <div className="card-body py-4">
                                <div className="d-flex pb-3 products bold_text">
                                    <div>
                                        <p className="mb-0">product</p>
                                    </div>
                                    <div className="ml-auto"><p className="mb-0">TOTAL</p></div>
                                </div>

                                {/* Products */}
                                <div className="d-flex pb-3 products">
                                    <div>
                                        <p className="mb-0">xiaomi note 8 pro</p>
                                    </div>
                                    <div className="ml-auto"><p className="mb-0">23,000</p></div>
                                </div>
                                <div className="d-flex pb-3 products">
                                    <div>
                                        <p className="mb-0">xiaomi note 8 pro</p>
                                    </div>
                                    <div className="ml-auto"><p className="mb-0">23,000</p></div>
                                </div>
                                <div className="d-flex pb-3 products">
                                    <div>
                                        <p className="mb-0">xiaomi note 8 pro</p>
                                    </div>
                                    <div className="ml-auto"><p className="mb-0">23,000</p></div>
                                </div>
                                <div className="d-flex pb-3 products">
                                    <div>
                                        <p className="mb-0">asus gaming laptop</p>
                                    </div>
                                    <div className="ml-auto"><p className="mb-0">1,25,000</p></div>
                                </div>
                                <div className="d-flex pb-3 products">
                                    <div>
                                        <p className="mb-0">ktm rc 125</p>
                                    </div>
                                    <div className="ml-auto"><p className="mb-0">3,70,000</p></div>
                                </div>
                                {/* End Products */}


                                <div className="d-flex pb-3 products bold_text">
                                    <div>
                                        <p className="mb-0">sub-total</p>
                                    </div>
                                    <div className="ml-auto"><p className="mb-0">50</p></div>
                                </div>
                                <div className="d-flex pb-3 products bold_text">
                                    <div>
                                        <p className="mb-0">shipping cost</p>
                                    </div>
                                    <div className="ml-auto"><p className="mb-0">50</p></div>
                                </div>
                                <div className="d-flex pb-3 products bold_text">
                                    <div>
                                        <p className="mb-0">total</p>
                                    </div>
                                    <div className="ml-auto"><p className="mb-0">500</p></div>
                                </div>

                                <button type="button" className="btn btn-block rounded-0 shadow-sm text-white place_order_btn">place order</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;