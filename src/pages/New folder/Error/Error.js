import React from 'react';
import { Link } from 'react-router-dom';
import QuickAccess from '../QuickAcces/QuickAccess';

const Error = () => {
    return (
        <div className="row m-5">
            <div className="col-lg-7 col-md-6, col-sm-12">
                <div className="m-2 p-4 border border-3 border-gray rounded-3">
                    <br />
                    <div>
                        <div className="text-center">
                            <h1 className="text-muted m-3text-center"> 404 </h1>
                            <h3 className="text-muted m-3text-center"> This page is not available </h3>
                        </div>
                    </div>
                    <br />
                    <Link to="/home">
                        <div className="d-flex justify-content-center">

                            <button className="btn btn-success p-2">Go to Home Page</button>

                        </div>
                    </Link>
                    <br />
                </div>
            </div>
            <div className="col-lg-5 col-md-6, col-sm-12">
                <div className="m-2 p-4 border border-3 border-gray rounded-3">
                    <h3 className="border-bottom border-3 border-gray text-muted">Quick Access</h3>
                    <QuickAccess></QuickAccess>
                </div>
            </div>
        </div >
    );
};

export default Error;