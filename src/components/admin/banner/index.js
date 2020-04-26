import React, { Component } from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';

import Banner from '../../../assets/sliders/slider1.png';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <div className="container-fluid banner_index">
                    <div className="row">
                        <div className="col-12">
                            <div className="d-flex">
                                <div className="mt-1"><h5>Website Banners</h5></div>
                                <div className="ml-auto">
                                    <Link to="/admin/banner/create" className="btn btn-uniq rounded-0 shadow-sm text-white"><i className="fas fa-plus"></i></Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 mt-3">
                            <Table responsive>
                                <thead>
                                    <tr>
                                        <td>SL</td>
                                        <td className="text-center">Banner</td>
                                        <td className="text-center">Action</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="pt-4">1</td>
                                        <td className="text-center"><img src={Banner} alt="Banner" /></td>
                                        <td className="text-center pt-4">
                                            <button type="button" className="btn btn-sm btn-light rounded-0 shadow-none text-danger"><i className="fas fa-trash-alt"></i></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="pt-4">2</td>
                                        <td className="text-center"><img src={Banner} alt="Banner" /></td>
                                        <td className="text-center pt-4">
                                            <button type="button" className="btn btn-sm btn-light rounded-0 shadow-none text-danger"><i className="fas fa-trash-alt"></i></button>
                                        </td>
                                    </tr>
                                </tbody>

                            </Table>
                        </div>
                    </div>
                </div>
                {/* <h1>Baner Index</h1>
                
                <br />
                <Link to={`/admin/banner/${2}/edit`}>Edit banner</Link> */}
            </div>
        );
    }
}

export default Index;