import React, { Component } from 'react';
import './index.css';
import NavBar from '../../product_nav/index';
import ReactImageMagnify from 'react-image-magnify';

import image from '../../../assets/products/8.png'

class ShowProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myImage: image
        }
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
            <div className="show-product" style={{ marginTop: "75px" }}>
                <NavBar />



                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <ReactImageMagnify {...imageProps} />
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="card">
                                <div className="card-body">
                                    <h1>hellodffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff</h1>
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