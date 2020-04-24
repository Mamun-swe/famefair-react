import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../../components/product_nav/index';
import './style.css';

// import OrderHistory from './order_history/index';
// import Me from './me/index';



class AccountMaster extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            
            <div>
                <Navbar />
                <div className="container links-btns">
                    <div className="row">
                        <div className="col-12">
                            <div className="d-flex">
                                <div className="flex-fill">
                                    <Link to="/account/" className="btn btn-block rounded-0 shadow-sm mr-4">Order History</Link>
                                </div>
                                <div className="flex-fill">
                                    <Link to="/account/me" className="btn btn-block rounded-0 shadow-sm ml-4">View Profile</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <Router>
                    <Switch>
                        <Route exact path="/account/" component={OrderHistory} />
                        <Route exact path="/account/me" component={Me} />
                    </Switch>
                </Router> */}
            </div>
        );
    }
}

export default AccountMaster;