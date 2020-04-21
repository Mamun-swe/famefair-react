import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import $ from 'jquery'
import './index.css'
import NavBar from '../../../components/product_nav/index'

import product_image_1 from '../../../assets/products/8.png'

class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
        this.mobileCategoryToggle = this.mobileCategoryToggle.bind(this)
        this.mobilePriceFilter = this.mobilePriceFilter.bind(this)
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                this.setState({ posts: response.data })
            })
            .catch(error => {
                console.log(error)
            })
        $('.mobile_category_list')
    }

    mobileCategoryToggle(){
        $(this.refs['mobile_category_list']).slideToggle()
    }

    mobilePriceFilter(){
        $(this.refs['mobile_filter_range']).slideToggle()
    }

    render() {
        const { posts } = this.state;
        return (
            <div>
                <NavBar />
                <div className="category_product">
                    {/* Header */}
                    <div className="category_product_header">
                        <div className="flex-center flex-column">
                            <h4>Category</h4>
                        </div>
                    </div>
                    {/* Body */}
                    <div className="category_product_body">
                        <div className="d-lg-flex">
                            {/* Side bar */}
                            <div className="d-none d-lg-block">
                                <div className="side_menu_section">
                                    {/* Categories */}
                                    <div className="card border-0 rounded-0 shadow-sm mb-4">
                                        <div className="card-header text-center py-4">
                                            <p className="mb-0">BROWSE CATEGORIES</p>
                                        </div>
                                        <div className="card-body px-4 py-3">
                                            <div className="category_name_list">
                                                <Link to="/">electronics</Link>
                                                <Link to="/">electronics</Link>
                                                <Link to="/">electronics</Link>
                                                <Link to="/">electronics</Link>
                                                <Link to="/">electronics</Link>
                                                <Link to="/">electronics</Link>
                                                <Link to="/">electronics</Link>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Price Filter */}
                                    <div className="card border-0 rounded-0 shadow-sm mb-4">
                                        <div className="card-header text-center py-4">
                                            <p className="mb-0">PRICE FILTER</p>
                                        </div>
                                        <div className="card-body p-4">
                                            <form>
                                                <input type="range" min="1" max="1000" className="slider" />
                                            </form>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            {/* End Side bar */}
                            <div className="flex-grow-1">
                                {/* Main Product Section */}
                                <div className="main_section">
                                    {/* Category & Filter Bar */}
                                    <div className="category_mobile_collapse d-lg-none">
                                        <div className="card mb-2 rounded-0 border-0">
                                            <div className="card-header border-0" onClick={this.mobileCategoryToggle}>
                                                <p className="mb-0">BROWSE CATEGORIES</p>
                                            </div>
                                            <div className="card-body pt-0" ref="mobile_category_list">
                                                <Link to="/">mobile</Link>
                                                <Link to="/">computer</Link>
                                                <Link to="/">headphone</Link>
                                                <Link to="/">clothes</Link>
                                                <Link to="/">bike</Link>
                                            </div>
                                        </div>

                                        <div className="card mb-2 rounded-0 border-0">
                                            <div className="card-header border-0" onClick={this.mobilePriceFilter}>
                                                <p className="mb-0">PRICE FILTER</p>
                                            </div>
                                            <div className="card-body" ref="mobile_filter_range">
                                                <form>
                                                    <input type="range" min="1" max="1000" className="slider" />
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Category & Filter Bar */}
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
                                                                <Link to={`/category/${post.id}`} type="button" className="btn shadow-none text-white">View</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ) :
                                                null
                                        }

                                        {/* End Repeat Product */}
                                    </div>
                                </div>
                                {/* End Main Product Section */}
                            </div>

                        </div>




                    </div>
                    {/* End Body */}
                </div>
            </div>
        );
    }
}

export default Category;