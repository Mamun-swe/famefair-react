import React, { Component } from 'react';
import './index.css';
import { Link } from 'react-router-dom';

class Create extends Component {
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
                                <div className="mt-1"><h5>Upload new banner</h5></div>
                                <div className="ml-auto">
                                    <Link to="/admin/banner" className="btn btn-uniq rounded-0 shadow-sm text-white"><i className="fas fa-arrow-left"></i></Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 mt-3">

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Create;