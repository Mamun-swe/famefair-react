import React, { Component } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import Logo from '../../assets/static/logo.png';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="auth">
                <div className="flex-center flex-column">
                    <div className="card rounded-0 border-0">
                        <div className="card-header pt-4 mb-3">
                            <Link to="/">
                                <img src={Logo} alt="Logo" />
                            </Link>

                        </div>
                        <div className="card-body shadow-sm">
                            <div className="title text-center mb-4">
                                <h5>Reset Password</h5>
                                <p>Just Enter e-mail, we will sent new password in your e-mail address.</p>
                            </div>
                            <form>
                                {/* Email */}
                                <div className="form-group mb-3 mb-lg-4">
                                    <input type="text" className="form-control rounded-0 shadow-none" placeholder="Enter email" />
                                </div>

                                <button type="submit" className="btn btn-block rounded-0 shadow-none">Reset password</button>
                            </form>

                            <div className="another_links mt-3">
                                <p className="mb-0">Go to <Link to="/login">Login</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;