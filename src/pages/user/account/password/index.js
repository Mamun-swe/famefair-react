import React from 'react';

const Index = () => {
    return (
        <div className="password">
            <div className="container pt-5 pb-4">
                <div className="row">
                    <div className="col-12">
                        <form>
                            {/* New Password */}
                            <div className="form-group mb-4">
                                <small>New Password</small>
                                <input type="password" className="form-control rounded-0 shadow-none" placeholder="Enter New Password" />
                            </div>

                            <button type="submit" className="btn btn-block rounded-0 shadow-none text-white">change password</button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;