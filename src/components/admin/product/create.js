import React, { Component } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
// import CKEditor from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

class productCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            paramid: null,
            // productName: "",
            // productNameError: "",
        }
    }
    // Form Handle
    onChangeInput(value) {
        console.log(value)
    }

    paramId() {
        return this.props.match.params.id;
    }

    componentDidMount() {
        this.setState({ paramid: this.paramId() });
    }



    render() {
        const colors = [
            { value: 'white', label: 'White' },
            { value: 'black', label: 'Black' },
            { value: 'red', label: 'Red' },
            { value: 'orange', label: 'Orange' },
            { value: 'green', label: 'Green' },
            { value: 'yellow', label: 'Yellow' },
            { value: 'violet', label: 'Violet' },
            { value: 'pink', label: 'Pink' },
            { value: 'navy-blue', label: 'Navy Blue' },
            { value: 'maroon', label: 'Maroon' },
            { value: 'lemon', label: 'Lemon' },
            { value: 'coffe', label: 'Coffe' },
            { value: 'brown', label: 'Brown' },
            { value: 'sky-blue', label: 'Sky Blue' },
        ]

        const brands = [
            { value: 'rfl', label: 'RFL' },
            { value: 'apex', label: 'Apex' },
            { value: 'lotto', label: 'Lotto' },
            { value: 'square', label: 'Square' },
            { value: 'magi', label: 'Magi' },
            { value: 'xiaomi', label: 'Xiaomi' },
            { value: 'samsung', label: 'Samsung' },
            { value: 'nokia', label: 'Nokia' },
            { value: 'apple', label: 'Apple' },
        ]
        const animatedComponents = makeAnimated();
        const styles = {
            height: 500
        }


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
                                        <div className="form-group mb-3 mb-lg-4">
                                            <small className="text-muted">Product Brand</small>
                                            <input name="productBrand"
                                                className="form-control rounded-0 shadow-none" placeholder="Enter Product Brand" />
                                        </div>

                                        {/* Product Color */}
                                        <small className="text-muted">Select Color</small>
                                        <Select
                                            className="mb-4"
                                            closeMenuOnSelect={false}
                                            components={animatedComponents}
                                            isMulti
                                            options={colors}
                                            onChange={this.onChangeInput}
                                        />

                                        {/* Product Brand */}
                                        <small className="text-muted">Select Brand</small>
                                        <Select
                                            className="mb-4"
                                            components={animatedComponents}
                                            options={brands}
                                            onChange={this.onChangeInput}
                                        />

                                        <div style={styles}></div>

                                        {/* EKEditor */}
                                        {/* <CKEditor
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
                                        /> */}




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