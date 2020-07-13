
import React, { Component } from 'react';
import './index.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import SideMenu from '../../Home_Side_Menu/index';
import Product from '../Product/index'

import slider1 from '../../../assets/sliders/slider1.png'
import slider2 from '../../../assets/sliders/slider2.png'
import slider3 from '../../../assets/sliders/slider3.png'

import Category1 from '../../../assets/category/1.png'
import Category2 from '../../../assets/category/2.png'
import Category3 from '../../../assets/category/3.png'

import Offer from '../../../assets/static/offer.png'


class mainSection extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }

    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
    }

    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            arrows: false,
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (

            <div className="main-section">
                {/* Side Menu Bar */}
                <SideMenu />
                {/* Slider */}
                <div className="header">
                    <div className="header-slider">
                        <Slider ref={c => (this.slider = c)} {...settings}>
                            <div>
                                <img src={slider1} className="img-fluid w-100" alt="Slider" />
                            </div>
                            <div>
                                <img src={slider2} className="img-fluid w-100" alt="Slider" />
                            </div>
                            <div>
                                <img src={slider3} className="img-fluid w-100" alt="Slider" />
                            </div>
                        </Slider>
                        <div className="buttons d-none d-lg-block">
                            <button type="button" className="btn shadow-none rounded-circle left-btn" onClick={this.previous}>
                                <i className="fas fa-chevron-left"></i>
                            </button>
                            <button
                                type="button"
                                className="btn shadow-none rounded-circle right-btn" onClick={this.next}>
                                <i className="fas fa-chevron-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
                {/* End Slider */}

                {/* Category */}
                <div className="category">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 px-2 pl-lg-0 pr-lg-3">

                                <div className="card text-center border rounded-0">
                                    <div className="card-body">
                                        <img src={Category1} className="img-fluid mb-2" alt="Category product" />
                                        <p className="mb-0 text-capitalize font-weight-bold">chair & tables</p>
                                    </div>
                                </div>

                                <div className="card text-center border rounded-0">
                                    <div className="card-body">
                                        <img src={Category2} className="img-fluid mb-2" alt="Category product" />
                                        <p className="mb-0 text-capitalize font-weight-bold">chair & tables</p>
                                    </div>
                                </div>

                                <div className="card text-center border rounded-0">
                                    <div className="card-body">
                                        <img src={Category3} className="img-fluid mb-2" alt="Category product" />
                                        <p className="mb-0 text-capitalize font-weight-bold">chair & tables</p>
                                    </div>
                                </div>

                                <div className="card text-center border rounded-0">
                                    <div className="card-body">
                                        <img src={Category2} className="img-fluid mb-2" alt="Category product" />
                                        <p className="mb-0 text-capitalize font-weight-bold">chair & tables</p>
                                    </div>
                                </div>

                                <div className="card text-center border rounded-0">
                                    <div className="card-body">
                                        <img src={Category1} className="img-fluid mb-2" alt="Category product" />
                                        <p className="mb-0 text-capitalize font-weight-bold">chair & tables</p>
                                    </div>
                                </div>

                                <div className="card text-center border rounded-0">
                                    <div className="card-body">
                                        <img src={Category3} className="img-fluid mb-2" alt="Category product" />
                                        <p className="mb-0 text-capitalize font-weight-bold">chair & tables</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                {/* End Category */}

                {/* Add image */}
                <div className="add-section">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 px-2 pl-lg-0 pr-lg-3">
                                <img src={Offer} className="img-fluid w-100" alt="Offer" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Add image */}

                {/* Products */}
                <Product />
                {/* End Products */}

            </div>
        );
    }
}



export default mainSection