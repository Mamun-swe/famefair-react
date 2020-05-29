import React, { Component } from 'react';
import Table from 'react-bootstrap/Table'
import Image from '../../../../assets/products/5.png'


class UserAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="history">
                <div className="container py-3 py-lg-4">
                    <div className="row">
                        <div className="col-12 mb-4">
                            <h5 className="mt-2 mb-0">Order history</h5>
                        </div>
                    </div>
                    <div className="col-12 mb-4">
                        <Table responsive borderless>
                            <thead>
                                <tr>
                                    <td>Item</td>
                                    <td className="text-center">Price</td>
                                    <td className="text-center">Quantity</td>
                                    <td className="text-center">Status</td>
                                    <td className="text-center">Date</td>
                                    <td className="text-center">Total</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><img src={Image} alt="product" /></td>
                                    <td className="text-center text">Mark</td>
                                    <td className="text-center text">Otto</td>
                                    <td className="text-center text">mdo</td>
                                    <td className="text-center text">mdo</td>
                                    <td className="text-center text">mdo</td>
                                </tr>
                                <tr>
                                    <td><img src={Image} alt="product" /></td>
                                    <td className="text-center text">Mark</td>
                                    <td className="text-center text">Otto</td>
                                    <td className="text-center text">mdo</td>
                                    <td className="text-center text">mdo</td>
                                    <td className="text-center text">mdo</td>
                                </tr>
                                <tr>
                                    <td><img src={Image} alt="product" /></td>
                                    <td className="text-center text">Mark</td>
                                    <td className="text-center text">Otto</td>
                                    <td className="text-center text">mdo</td>
                                    <td className="text-center text">mdo</td>
                                    <td className="text-center text">mdo</td>
                                </tr>
                                <tr>
                                    <td><img src={Image} alt="product" /></td>
                                    <td className="text-center text">Mark</td>
                                    <td className="text-center text">Otto</td>
                                    <td className="text-center text">mdo</td>
                                    <td className="text-center text">mdo</td>
                                    <td className="text-center text">mdo</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>

                    <div className="col-12 mb-4 text-center">
                        <button type="button" className="btn rounded-0 shadow-sm px-4 px-lg-5 load_more_btn">Load More</button>


                    </div>

                </div>
            </div>
        );
    }
}

export default UserAccount;