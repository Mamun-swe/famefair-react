import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { Link } from 'react-router-dom';

class TodayOrderIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: [],
            search: ""
        }
    }

    newOrders = () => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                this.setState({ orders: response.data })
            })
            .catch(error => {
                console.log(error)
            })
    }


    // Search Filter Handeller
    filterHandle = (event) => {
        this.setState({ search: event.target.value })
    }

    componentDidMount() {
        this.newOrders()
    }
    render() {
        const myorders = this.state.orders.filter(
            (order) => {
                return order.email.indexOf(this.state.search) !== -1;
            }
        );
        return (
            <div>
                <div className="row">
                    {/* Filter Column */}
                    <div className="col-12 py-2 filter_column px-0 px-lg-2">
                        <input type="text" className="form-control rounded-0 shadow-sm" onChange={this.filterHandle} placeholder="Search by email" />
                    </div>

                    {/* Order List Table */}
                    <div className="col-12 p-0 p-lg-2">
                        <Table responsive bordered size="sm" className="table shadow-sm">
                            <thead>
                                <tr>
                                    <td className="text-center">ORDER ID</td>
                                    <td>Name</td>
                                    <td>Delivery</td>
                                    <td className="text-center">Total</td>
                                    <td>Payment</td>
                                    <td className="text-center">Status</td>
                                    <td className="text-center">Date</td>
                                    <td className="text-center">View</td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    myorders.length ?
                                        myorders.map((order, index) => (
                                            <tr key={index}>
                                                <td className="text-center">{order.id}</td>
                                                <td>{order.name}</td>
                                                <td>{order.email}</td>
                                                <td className="text-center pt-2">1200 Tk</td>
                                                <td className="pt-2">Bkash</td>
                                                <td className="text-center pt-2">
                                                    <span className="bg-warning px-2 py-1 text-white">Pending</span>
                                                </td>
                                                <td className="text-center text-capitalize pt-2">07 may 2020</td>
                                                <td className="text-center">
                                                    <Link to={`/admin/category/${2}/edit`} type="button" className="btn btn-sm btn-light rounded-0 shadow-none text-info"><i className="fas fa-eye"></i></Link>
                                                </td>
                                            </tr>

                                        ))
                                        :
                                        null
                                }
                            </tbody>

                        </Table>
                    </div>

                </div>
            </div>
        );
    }
}

export default TodayOrderIndex;