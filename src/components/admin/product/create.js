import React, { Component } from 'react';

class productCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            paramid: null
        }
    }

    componentDidMount() {
        this.setState({ paramid: this.paramId() });

    }

    paramId() {
        return this.props.match.params.id;
    }

    render() {
        return (
            <div className="product_create">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 p-0 px-sm-3">
                            <div className="card rounded-0 shadow-sm border-0">
                                <div className="card-body">
                                    <h2>Producy Add {this.state.paramid}</h2>
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