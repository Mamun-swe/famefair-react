import React, { Component } from 'react';

class Me extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="me">
                <div className="container pt-4 pt-lg-5 pb-4">
                    <div className="row">
                        <div className="col-12">
                            <form>

                                <div className="row">
                                    {/* Name */}
                                    <div className="col-12 col-lg-6 mb-lg-3">
                                        <div className="form-group">
                                            <small>name</small>
                                            <input type="text" className="form-control rounded-0 shadow-none" value="Mamun" readOnly />
                                        </div>
                                    </div>

                                    {/* Address */}
                                    <div className="col-12 col-lg-6 mb-lg-3">
                                        <div className="form-group">
                                            <small>Address</small>
                                            <input type="text" className="form-control rounded-0 shadow-none" />
                                        </div>
                                    </div>

                                    {/* Post Code */}
                                    <div className="col-12 col-lg-6 mb-lg-3">
                                        <div className="form-group">
                                            <small>post code</small>
                                            <input type="text" className="form-control rounded-0 shadow-none" />
                                        </div>
                                    </div>

                                    {/* Town/city */}
                                    <div className="col-12 col-lg-6 mb-lg-3">
                                        <div className="form-group">
                                            <small>town/city</small>
                                            <input type="text" className="form-control rounded-0 shadow-none" />
                                        </div>
                                    </div>

                                    {/* Phone */}
                                    <div className="col-12 col-lg-6 mb-lg-3">
                                        <div className="form-group">
                                            <small>Phone no</small>
                                            <input type="text" className="form-control rounded-0 shadow-none" />
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className="col-12 col-lg-6 mb-lg-3">
                                        <div className="form-group">
                                            <small>email</small>
                                            <input type="text" className="form-control rounded-0 shadow-none" value="mamun@gmail.com" readOnly />
                                        </div>
                                    </div>
                                </div>

                                <button type="submit" className="btn btn-block rounded-0 shadow-none text-white">update profile</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Me;