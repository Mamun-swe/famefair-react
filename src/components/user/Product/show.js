import React, { Component } from 'react';
import './index.css';
import NavBar from '../../product_nav/index';
import ReactImageMagnify from 'react-image-magnify';
import ShowMoreText from 'react-show-more-text';

import image from '../../../assets/products/9.png'

class ShowProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myImage: image,
            count: 1
        }
    }

    isDisabledDecrement() {
        if (this.state.count <= 1) {
            return true;
        } else {
            return false;
        }
    }

    decrementProductQnt = () => {
        this.setState({
            count: this.state.count - 1
        })
        this.isDisabledDecrement()

    }

    incrementProductQnt = () => {
        this.setState({
            count: this.state.count + 1
        });
    }



    render() {
        const imageProps = {
            smallImage: {
                alt: 'Phasellus laoreet',
                isFluidWidth: true,
                src: this.state.myImage
            },
            largeImage: {
                src: this.state.myImage,
                width: 1200,
                height: 1800
            },
            enlargedImageContainerStyle: { background: '#fff', zIndex: 9 }
        };
        return (
            <div className="show_product">
                <NavBar />

                <div className="container pt-3 pt-lg-0">
                    <div className="row pb-4">
                        <div className="col-12 col-lg-12">
                            <div className="card border-0">
                                <div className="card-body py-2">
                                    <div className="row">
                                        {/* Product Image */}
                                        <div className="col-12 col-lg-4 py-0 px-1 bg-white">
                                            <ReactImageMagnify {...imageProps} />
                                        </div>

                                        {/* Product Information */}
                                        <div className="col-12 col-lg-4 py-0 px-1 mt-3 mt-lg-0">
                                            <div className="card border-0">
                                                <div className="card-body">
                                                    <h5>Apple Macbook Pro MVVK2 2019 16-inch Retina Display with Touch Bar Core i9-2.3GHz 16GB Ram 1TB SSD Radeon Pro 4GB Graphics - Gray</h5>
                                                    <p className="sku">SKU: 0X46DFC</p>
                                                    <p className="brand mb-4">BRAND : <span>Apple  |  More Laptop from Apple</span></p>
                                                    <p className="information">
                                                        <ShowMoreText

                                                            lines={4}
                                                            more='Show More'
                                                            less='Show Less'
                                                            anchorClass=''
                                                            onClick={this.executeOnClick}
                                                            expanded={false}
                                                            width={300}
                                                        >
                                                            Features
                                                            Model: Apple Macbook Pro MVVK2
                                                            2.3GHz 8-core 9th-generation Intel Core i9 processor
                                                            16GB DDR4 memory
                                                            1TB SSD storage
                                                            AMD Radeon Pro 5500M 4GB Graphics

                                                            Specification:
                                                            Basic Information
                                                            Processor 2.3GHz 8-core 9th-generation Intel Core i9 processor (Turbo Boost up to 4.8GHz)
                                                            Display 16-inch Retina display with True Tone
                                                            Memory 16GB 2666MHz DDR4 memory
                                                            Storage 1TB SSD storage
                                                            Graphics AMD Radeon Pro 5500M with 4GB of GDDR6 memory
                                                            Operating System macOS
                                                            Battery 100Wh Lithium Polymer Battery
                                                            Maximum Runtime: Up to 11 Hours
                                                            Special Feature Fingerprint Reader
                                                            AC Input Power: 100 to 240 VAC, 50 / 60 Hz
                                                            Input Devices
                                                            Keyboard 65 (U.S.)/66 (ISO)-Keys including 4 arrow keys in an inverted‑T arrangement Notebook Keyboard,Touch Bar,Touch ID sensor,Ambient light sensor
                                                            Optical Drive No
                                                            WebCam 720p HD Camera
                                                            Network & Wireless Connectivity
                                                            Wi-Fi 802.11 a/b/g/n
                                                            Bluetooth v5.0
                                                            Ports, Connectors & Slots
                                                            USB (s) 4x Thunderbolt 3 (Supports Display Port)
                                                            Physical Specification
                                                            Dimensions (W x D x H) 35.79 x 1.62 x 24.59cm
                                                            Weight 2kg
                                                            Color(s) Gray
                                                            Warranty
                                                            Manufacturing Warranty 01 year International Limited Warranty (Terms & Condition Apply As Per Apple)
                                                        </ShowMoreText>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Add To Cart Product */}
                                        <div className="col-12 col-lg-4 py-0 px-1 mt-3 mt-lg-0 product_avilavle">
                                            <div className="card border-0">
                                                <div className="card-body">
                                                    <h4 className="mb-4">Available Quantity: 500</h4>
                                                    <div className="d-flex mb-3">
                                                        <div>
                                                            <button type="button" className="btn border rounded-0 shadow-none" id="descBtn" onClick={this.decrementProductQnt} disabled={this.isDisabledDecrement()}>
                                                                <i className="fas fa-minus"></i>
                                                            </button>
                                                        </div>
                                                        <div className="flex-fill">
                                                            <input type="number" className="form-control rounded-0 shadow-none text-center" value={this.state.count} readOnly />
                                                        </div>
                                                        <div>
                                                            <button type="button" className="btn border rounded-0 shadow-none" onClick={this.incrementProductQnt}>
                                                                <i className="fas fa-plus"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <button type="button" className="btn btn-block add-cart-btn rounded-0 shadow-none text-white py-2">Add to cart</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Client Review */}
                                    
                                    {/* End Client Review */}


                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        );
    }
}

export default ShowProduct;