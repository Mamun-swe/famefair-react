import React, { Component } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';

import Banner from '../../../assets/category/2.png';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    deleteCategory() {
        console.log('Hi I am delete category')
    }

    render() {
        return (
            <div>
                <div className="container-fluid category_index">
                    <div className="row">
                        <div className="col-12">
                            <div className="d-flex">
                                <div className="mt-1 mb-0"><h5>Category List</h5></div>
                                <div className="ml-auto">
                                    <Link to="/admin/category/create" className="btn btn-uniq rounded-0 shadow-sm text-white"><i className="fas fa-plus"></i></Link>
                                </div>
                            </div>
                        </div>


                        <div className="col-12 mt-3">
                            <Table responsive>
                                <thead>
                                    <tr>
                                        <td>SL</td>
                                        <td className="text-center">Category Image</td>
                                        <td>Category Name</td>
                                        <td className="text-center">Action</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="pt-4">1</td>
                                        <td className="text-center"><img src={Banner} alt="Banner" /></td>
                                        <td className="text-capitalize pt-4">dummy name</td>
                                        <td className="text-center pt-4">
                                            <button type="button" className="btn btn-sm btn-light rounded-0 shadow-none text-danger" onClick={this.deleteCategory}><i className="fas fa-trash-alt"></i></button>
                                            <Link to={`/admin/category/${2}/edit`} type="button" className="btn btn-sm btn-light rounded-0 shadow-none text-info"><i className="fas fa-pen"></i></Link>
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

export default Index;