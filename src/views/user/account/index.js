import React, { Component } from 'react';
import './index.css';
import Navbar from '../../../components/product_nav/index';

class UserAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="account">
                <Navbar />
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1>My Account</h1>
                            <h5><i class="fas fa-long-arrow-alt-right mr-3"></i>Order history</h5>
                            <h5><i class="fas fa-long-arrow-alt-right mr-3"></i>Account details</h5>
                            <h5><i class="fas fa-long-arrow-alt-right mr-3"></i>Account details update</h5>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserAccount;