import React, { Component } from 'react';
import ProductImage from '../../../assets/products/10.png';


class show extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    goBack() {
        window.history.back();
    }

    render() {
        return (
            <div className="product-show">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 mb-3">
                            <button type="button" onClick={this.goBack} className="btn btn-uniq rounded-0 shadow-sm text-white"><i className="fas fa-arrow-left"></i></button>
                        </div>

                        <div className="col-12 mb-4 text-center">
                            <div className="d-flex justify-content-between">
                                <div>
                                    <img src={ProductImage} className="img-fluid" alt="product" />
                                </div>
                                <div>
                                    <img src={ProductImage} className="img-fluid" alt="product" />
                                </div>
                                <div>
                                    <img src={ProductImage} className="img-fluid" alt="product" />
                                </div>
                            </div>

                        </div>

                        <div className="col-12">
                            <h5 className="mb-3">Apple Macbook Pro MVVK2 2019 16-inch Retina Display with Touch Bar Core i9-2.3GHz 16GB Ram 1TB SSD Radeon Pro 4GB Graphics - Gray</h5>
                        </div>

                        <div className="col-12 mb-3">
                            <div className="details">
                                <p>Features Model: Apple Macbook Pro MVVK2 2.3GHz 8-core 9th-generation Intel Core i9 processor 16GB DDR4 memory 1TB SSD storage AMD Radeon Pro 5500M 4GB Graphics Specification: Basic Information Processor 2.3GHz 8-core 9th-generation Intel Core i9 processor (Turbo Boost up to 4.8GHz) Display 16-inch Retina display with True Tone Memory 16GB 2666MHz DDR4 memory Storage 1TB SSD storage Graphics AMD Radeon Pro 5500M with 4GB of GDDR6 memory Operating System macOS Battery 100Wh Lithium Polymer Battery Maximum Runtime: Up to 11 Hours Special Feature Fingerprint Reader AC Input Power: 100 to 240 VAC, 50 / 60 Hz Input Devices Keyboard 65 (U.S.)/66 (ISO)-Keys including 4 arrow keys in an inverted‑T arrangement Notebook Keyboard,Touch Bar,Touch ID sensor,Ambient light sensor Optical Drive No WebCam 720p HD Camera Network & Wireless Connectivity Wi-Fi 802.11 a/b/g/n Bluetooth v5.0 Ports, Connectors & Slots USB (s) 4x Thunderbolt 3 (Supports Display Port) Physical Specification Dimensions (W x D x H) 35.79 x 1.62 x 24.59cm Weight 2kg Color(s) Gray Warranty Manufacturing Warranty 01 year International Limited Warranty (Terms & Condition Apply As Per Apple)</p>
                            </div>

                            <div className="col-12">
                                <div className="row">
                                    <div className="col-6 col-sm-4">
                                        <div className="brands">
                                            <p className="mb-1">BRANDS</p>
                                            <ol className="pl-4">
                                                <li><p>apple</p></li>
                                                <li><p>apple</p></li>
                                                <li><p>apple</p></li>
                                                <li><p>apple</p></li>
                                            </ol>
                                        </div>
                                    </div>

                                    <div className="col-6 col-sm-4">
                                        <div className="brands">
                                            <p className="mb-1">COLORS</p>
                                            <ol className="pl-4">
                                                <li><p>apple</p></li>
                                                <li><p>apple</p></li>
                                                <li><p>apple</p></li>
                                                <li><p>apple</p></li>
                                            </ol>
                                        </div>
                                    </div>

                                    <div className="col-6 col-sm-4">
                                        <div className="brands">
                                            <p className="mb-1">PRICE</p>
                                            <p>TK. 500</p>
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

export default show;