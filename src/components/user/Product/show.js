import React, { Component } from 'react';
import './index.css';
import NavBar from '../../product_nav/index';
import ReactImageMagnify from 'react-image-magnify';
import ShowMoreText from 'react-show-more-text';
import axios from 'axios'
import { Link } from 'react-router-dom';


import image from '../../../assets/products/9.png';
import user from '../../../assets/static/user.jpg';
import product_image_1 from '../../../assets/products/8.png';

import image1 from '../../../assets/products/4.png';
import image2 from '../../../assets/products/5.png';
import image3 from '../../../assets/products/6.png';

class ShowProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myImage: image,
            count: 1,
            posts: []
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

    handleImage = event => {
        this.setState({ myImage: event.target.src })
    }

    relatedProducts() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                this.setState({ posts: response.data })
            })
            .catch(error => {
                console.log(error)
            })
    }

    componentDidMount() {
        this.relatedProducts()
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

        const { posts } = this.state;
        return (
            <div className="show_product">
                <NavBar />

                <div className="container pt-3 pt-lg-0 pb-4">
                    <div className="row pb-4 pb-lg-5">
                        <div className="col-12 col-lg-12">
                            <div className="card border-0">
                                <div className="card-body py-2">
                                    <div className="row">
                                        {/* Product Image */}
                                        <div className="col-12 col-lg-4 py-0 px-1 bg-white">
                                            <ReactImageMagnify {...imageProps} />
                                            <div className="img-list text-center mt-lg-2">
                                                <ul>
                                                    <li><img src={image1} onClick={this.handleImage} alt="source" /></li>
                                                    <li><img src={image2} onClick={this.handleImage} alt="source" /></li>
                                                    <li><img src={image3} onClick={this.handleImage} alt="source" /></li>
                                                </ul>
                                            </div>
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

                                        {/* Add To Cart Product & methods */}
                                        <div className="col-12 col-lg-4 py-0 px-1 mt-3 mt-lg-0 product_avilavle">
                                            <div className="card border-0">
                                                <div className="card-body">
                                                    <h4 className="mb-3">Available Quantity: 500</h4>

                                                    <form>
                                                        {/* Colors */}
                                                        <div className="color mb-3">
                                                            <h5 className="pb-2 mb-3">Avilable Colors</h5>

                                                            <div className="form-check mb-2">
                                                                <input type="checkbox" className="form-check-input" />
                                                                <label className="form-check-label">red</label>
                                                            </div>
                                                            <div className="form-check mb-2">
                                                                <input type="checkbox" className="form-check-input" />
                                                                <label className="form-check-label">blue</label>
                                                            </div>
                                                            <div className="form-check mb-2">
                                                                <input type="checkbox" className="form-check-input" />
                                                                <label className="form-check-label">yellow</label>
                                                            </div>
                                                        </div>
                                                        {/* Price */}
                                                        <div className="price">
                                                            <h5>Price: 500tk</h5>
                                                        </div>

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
                                                        <button type="submit" className="btn btn-block add-cart-btn rounded-0 shadow-none text-white py-2">Add to cart</button>
                                                    </form>


                                                    <div className="extra_methods my-4">
                                                        <div className="methods mb-4">
                                                            <h5 className="pb-2 mb-0">Payment Options</h5>
                                                            <small>Cash on Delivery (Out Dhaka)</small>
                                                        </div>
                                                        <div className="methods mb-4">
                                                            <h5 className="pb-2 mb-0">Delivery System</h5>
                                                            <small> Home Delivery (20-25) Days</small>
                                                        </div>
                                                        <div className="methods mb-4">
                                                            <h5 className="pb-2 mb-0">Warranty & Return Policy</h5>
                                                            <small>Return (10) Days</small>
                                                            <br />
                                                            <small>Local Warranty - (31) Days</small>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        {/* End Add To Cart Product & methods */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Client Review */}
                    <div className="client_review">
                        <div className="row">
                            <div className="col-12 mb-4">
                                <h6 className="text-dark">155 People review</h6>
                            </div>
                        </div>
                        {/* Review List */}
                        <div className="row reviews">

                            <div className="col-12 border-bottom pt-3">
                                <div className="d-flex">
                                    <div>
                                        <img src={user} className="rounded-circle" alt="client" />
                                    </div>
                                    <div className="pl-4">
                                        <h6 className="text-capitalize mb-0">abdullah al mamun</h6>
                                        <div className="rating">
                                            <ul>
                                                <li><i className="fas fa-star text-warning"></i></li>
                                                <li><i className="fas fa-star text-warning"></i></li>
                                                <li><i className="fas fa-star text-warning"></i></li>
                                                <li><i className="fas fa-star text-warning"></i></li>
                                                <li><i className="fas fa-star text-warning"></i></li>
                                            </ul>
                                        </div>
                                        <br />
                                        <p>
                                            <ShowMoreText
                                                lines={2}
                                                more='Show More'
                                                less='Show Less'
                                                anchorClass=''
                                                onClick={this.executeOnClick}
                                                expanded={false}
                                                width={300}
                                            >
                                                Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
                                                Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
                                            </ShowMoreText>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 border-bottom pt-3">
                                <div className="d-flex">
                                    <div>
                                        <img src={user} className="rounded-circle" alt="client" />
                                    </div>
                                    <div className="pl-4">
                                        <h6 className="text-capitalize mb-0">abdullah al mamun</h6>
                                        <div className="rating">
                                            <ul>
                                                <li><i className="fas fa-star text-warning"></i></li>
                                                <li><i className="fas fa-star text-warning"></i></li>
                                                <li><i className="fas fa-star text-warning"></i></li>
                                                <li><i className="fas fa-star text-warning"></i></li>
                                                <li><i className="fas fa-star-half text-warning"></i></li>
                                            </ul>
                                        </div>
                                        <br />
                                        <p>
                                            <ShowMoreText
                                                lines={2}
                                                more='Show More'
                                                less='Show Less'
                                                anchorClass=''
                                                onClick={this.executeOnClick}
                                                expanded={false}
                                                width={300}
                                            >
                                                Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
                                                Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
                                            </ShowMoreText>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 text-center my-4">
                                <button type="button" className="btn shadow-none">Load More</button>
                            </div>
                        </div>
                        {/* End Review List */}
                    </div>
                    {/* End Client Review */}
                </div>


                <div className="container-fluid">
                    {/* Related Products */}
                    <div className="row related_products">
                        <div className="col-12">
                            <h5 className="mb-2">Related Products</h5>
                        </div>

                        <div className="col-12 mb-4 px-2">
                            <div className="products">
                                {/* Repeat Product */}
                                {
                                    posts.length ?
                                        posts.map(post =>
                                            <div className="card product-card" key={post.id}>
                                                <div className="card-body">
                                                    <div className="img-box">
                                                        <img src={product_image_1} className="img-fluid" alt="Product" />
                                                        <div className="product-overlay">
                                                            <div className="flex-center flex-column">
                                                                <button className="btn product-btn shadow-none">Add to cart</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card-content p-2">
                                                        <p className="mb-1 text-capitalize name">product name {post.id}</p>
                                                        <p className="mb-2 price">220tk</p>
                                                        <Link to={`/product/${post.id}`} type="button" className="btn shadow-none">View</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        ) :
                                        null
                                }
                                {/* End Repeat Product */}
                            </div>
                        </div>
                    </div>
                    {/* End Related Products */}
                </div>

            </div>
        );
    }
}

export default ShowProduct;