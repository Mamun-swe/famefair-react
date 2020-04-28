import React, { Component } from 'react';
import './index.css';
import { Link } from 'react-router-dom';

import PlaceholderImg from '../../../assets/static/placeholder_img.png';

class Create extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null,
            previewURL: null
        }
    }

    onChangeHandler = event => {
        var file = event.target.files[0];
        this.setState({
            selectedFile: file,
            previewURL: URL.createObjectURL(event.target.files[0])
        })
    }


    render() {
        const previewFile = this.state.previewURL;

        return (
            <div>
                <div className="container-fluid banner_create">
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
                            <div className="card rounded-0 border-0 shadow-sm">
                                <div className="card-body">
                                    <div>
                                        {
                                            previewFile ? (
                                                <img src={this.state.previewURL} className="w-100" alt="Preview" />
                                            ) : (
                                                    <img src={PlaceholderImg} className="w-100" alt="Placeholder" />
                                                )
                                        }
                                    </div>
                                    <div className="d-flex">
                                        <div className="ml-auto">
                                            <input type="file" id="file" name="file" className="inputfile" onChange={this.onChangeHandler} />
                                            <label htmlFor="file" className="btn btn-danger rounded-0 shadow-sm text-white px-4 mr-2 mt-2">Choose a file</label>
                                            <button type="button" className="btn btn-uniq rounded-0 shadow-sm text-white px-4 py-2 upload-btn">Upload</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Create;