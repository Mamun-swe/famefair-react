import React, { Component } from 'react';
import Select from 'react-select';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

class productCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            paramid: null,
            productName: "",
            productNameError: "",
        }
    }
    // Form Handle

    componentDidMount() {
        this.setState({ paramid: this.paramId() });
    }

    paramId() {
        return this.props.match.params.id;
    }


    render() {
        const options = [
            { value: 'chocolate', label: 'Chocolate' },
            { value: 'strawberry', label: 'Strawberry' },
            { value: 'vanilla', label: 'Vanilla' }
        ]


        return (
            <div className="product_create">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 p-0 px-sm-3">
                            <div className="card rounded-0 shadow-sm border-0">
                                <div className="card-header rounded-0 bg-white py-3">
                                    <h5 className="mb-0">Add new product</h5>
                                </div>
                                <div className="card-body py-4">
                                    <h2>Producy Add {this.state.paramid}</h2>
                                    <form onSubmit={this.handleSubmit}>
                                        {/* Product Name */}
                                        <div className="form-group mb-3 mb-lg-4">

                                            <small className="text-muted">Product Name</small>
                                            <input name="productName"
                                                className="form-control rounded-0 shadow-none" placeholder="Enter Product Name" />
                                        </div>

                                        {/* Product Brand */}
                                        <Select options={options} className="mb-4" />

                                        {/* EKEditor */}
                                        <CKEditor
                                            editor={ClassicEditor}
                                            onInit={editor => {
                                                // You can store the "editor" and use when it is needed.
                                                console.log('Editor is ready to use!', editor);
                                            }}
                                            onChange={(event, editor) => {
                                                const data = editor.getData();
                                                console.log({ event, editor, data });
                                            }}
                                            className="mb-4"
                                        />




                                        <button type="submit" className="btn btn-info rounded-0 shadow-none text-white btn-block">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default productCreate;