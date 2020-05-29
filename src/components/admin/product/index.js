import React, { Component } from 'react';
import './style.css';
import { Link } from 'react-router-dom';

import Img from '../../../assets/products/10.png';

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
                        <div className="col-12 mb-3 mb-lg-4">
                            <div className="d-flex">
                                <div>
                                    <h5 className="mb-0 mt-1">Product of <span className="text-capitalize">women fashion</span></h5>
                                </div>
                                <div className="ml-auto">
                                    <Link to={`/admin/category/${this.props.match.params.id}/products/create`} className="btn btn-uniq rounded-0 shadow-sm text-white"><i className="fas fa-plus"></i></Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-12">
                            <table className="table table-sm table-responsive-sm table-borderd">
                                <thead>
                                    <tr>
                                        <td className="text-center">SL</td>
                                        <td className="text-center">Image</td>
                                        <td>Product Name</td>
                                        <td className="text-center">Action</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="text-center pt-3">1</td>
                                        <td className="text-center">
                                            <img src={Img} className="img-fluid" alt='product' />
                                        </td>
                                        <td className="text-left text-capitalize pt-3">name</td>
                                        <td className="text-center pt-3">
                                            <Link to={`/admin/product/${2}/edit`} type="button" className="btn btn-sm btn-light rounded-0 shadow-none text-dark"><i className="fas fa-pen"></i></Link>
                                            <Link to={`/admin/product/${2}/show`} type="button" className="btn btn-sm btn-light rounded-0 shadow-none text-info"><i className="fas fa-eye"></i></Link>
                                            <button type="button" className="btn btn-sm btn-light rounded-0 shadow-none text-danger"><i className="fas fa-trash"></i></button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductIndex;