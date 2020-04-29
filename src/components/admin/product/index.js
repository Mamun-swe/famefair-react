import React, { Component } from 'react';
import './style.css';
import { Link } from 'react-router-dom';

class ProductIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="product_index">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="d-flex">
                                <div>
                                    <h5 className="mb-0 mt-1">Product of <span className="text-capitalize">women fashion</span></h5>
                                </div>
                                <div className="ml-auto">
                                    <Link to="/admin/category/create" className="btn btn-uniq rounded-0 shadow-sm text-white"><i className="fas fa-plus"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductIndex;