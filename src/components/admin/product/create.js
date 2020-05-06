import React, { Component } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

class productCreate extends Component {
    fileObj = [];
    fileArray = [];

    constructor(props) {
        super(props);
        this.state = {
            paramid: null,
            productName: "",
            productQuantity: "",
            productColors: "",
            productBrands: "",
            productSizes: "",
            productInfo: "",
            productImages: [null]
        }
    }
    // Form Handle
    onChangeInputName = (event) => {
        this.setState({
            productName: event.target.value
        })
    }
    onChangeInputQuantity = (event) => {
        this.setState({
            productQuantity: event.target.value
        })
    }
    onChangeInputColors = (value) => {
        this.setState({
            productColors: value
        })
    }
    onChangeInputBrand = (value) => {
        this.setState({
            productBrands: value
        })
    }
    onChangeInputSize = (value) => {
        this.setState({
            productSizes: value
        })
    }
    onChangeFilesHandler = event => {
        this.fileObj.push(event.target.files)
        for (let i = 0; i < this.fileObj[0].length; i++) {
            this.fileArray.push(URL.createObjectURL(this.fileObj[0][i]))
        }
        this.setState({ productImages: this.fileArray })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const xdata = {
            categoryId: this.state.paramid,
            name: this.state.productName,
            colors: this.state.productColors,
            brands: this.state.productBrands,
            sizes: this.state.productSizes,
            info: this.state.productInfo,
            images: this.state.productImages
        }
        console.log(xdata)
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
        const sizes = [
            { value: 's', label: 'S' },
            { value: 'm', label: 'M' },
            { value: 'l', label: 'L' },
            { value: 'xl', label: 'XL' },
            { value: 'xxl', label: 'XXL' },
            { value: 'xxxl', label: 'XXXL' }
        ]
        const animatedComponents = makeAnimated();

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
                                            <input
                                                className="form-control rounded-0 shadow-none"
                                                placeholder="Enter Product Name"
                                                onChange={this.onChangeInputName} />
                                        </div>

                                        {/* Product Quantity */}
                                        <div className="form-group mb-3 mb-lg-4">
                                            <small className="text-muted">Product Quantity</small>
                                            <input
                                                className="form-control rounded-0 shadow-none"
                                                placeholder="Enter Product Quantity"
                                                onChange={this.onChangeInputQuantity} />
                                        </div>

                                        {/* Product Color */}
                                        <small className="text-muted">Select Color</small>
                                        <Select
                                            className="mb-4"
                                            closeMenuOnSelect={false}
                                            components={animatedComponents}
                                            isMulti
                                            options={colors}
                                            onChange={this.onChangeInputColors}
                                        />

                                        {/* Product Brand */}
                                        <small className="text-muted">Select Brand</small>
                                        <Select
                                            className="mb-4"
                                            components={animatedComponents}
                                            options={brands}
                                            onChange={this.onChangeInputBrand}
                                        />

                                        {/* Product Size */}
                                        <small className="text-muted">Select Size</small>
                                        <Select
                                            className="mb-4"
                                            components={animatedComponents}
                                            isMulti
                                            options={sizes}
                                            onChange={this.onChangeInputSize}
                                        />

                                        {/* Product Information */}
                                        <small className="text-muted">Product Information</small>
                                        <CKEditor
                                            editor={ClassicEditor}
                                            onChange={(event, editor) => {
                                                const data = editor.getData();
                                                this.setState({ productInfo: data })
                                            }}
                                            className="form-control"
                                        />
                                        <br />

                                        {/* Product Images */}
                                        <div className="form-group mb-3">
                                            <div className="form-group multi-preview">
                                                {(this.fileArray || []).map(url => (
                                                    <img src={url} alt="Products" key={url} />
                                                ))}
                                            </div>
                                        </div>

                                        <div className="form-group mb-3 file-upload-btn">
                                            <div className="d-flex">
                                                <div className="ml-auto">
                                                    <input type="file" id="file" name="file" className="inputfile" onChange={this.onChangeFilesHandler} multiple />
                                                    <label htmlFor="file" className="btn btn-danger rounded-0 shadow-sm text-white px-4 mr-2 mt-2">Select product images</label>
                                                    <button type="submit" className="btn btn-uniq rounded-0 shadow-sm text-white px-4 py-2 upload-btn">Upload</button>
                                                </div>
                                            </div>
                                        </div>

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