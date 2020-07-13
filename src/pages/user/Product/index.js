import React, { useState, useEffect } from 'react';
import './index.css';
import axios from 'axios'
import { Link } from 'react-router-dom';

import product_image_1 from '../../../assets/products/8.png'

const Index = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
    }, [])

    const getProducts = () => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                setProducts(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className="product">
            <div className="container-fluid">
                <div className="row">

                    {/* Repeat Category */}
                    <div className="col-12 mb-4 mb-lg-5 px-2 pl-lg-0 pr-lg-3">
                        <div className="d-flex mb-3">
                            <div>
                                <h4 className="text-capitalize text-uniq-dark mb-0 mt-2">mobile</h4>
                            </div>
                            <div className="ml-auto">
                                <Link to="/" className="btn uniq-btn shadow-none">View All</Link>
                            </div>
                        </div>
                        <div className="products">
                            {/* Repeat Product */}
                            {
                                products.length ?
                                    products.map(product =>
                                        <div className="card product-card" key={product.id}>
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
                                                    <p className="mb-1 text-capitalize name">{product.username}</p>
                                                    <p className="mb-2 price">220tk</p>
                                                    <Link to={`/product/${product.id}`} type="button" className="btn shadow-none">View</Link>
                                                </div>
                                            </div>
                                        </div>
                                    ) :
                                    null
                            }
                            {/* End Repeat Product */}
                        </div>
                    </div>
                    {/* End Repeat Category */}

                </div>
            </div>
        </div>
    );
};

export default Index;