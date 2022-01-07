import React from 'react';
import QuickAccess from '../QuickAcces/QuickAccess';
import './Contact.css'

const Contact = () => {
    return (
        <div className="row m-5">
            <div className="col-lg-7 col-md-6, col-sm-12">
                <div className="m-2 p-4 border border-3 border-gray rounded-3">
                    <h3 className="border-bottom border-3 border-gray text-primary"> <i className="fas fa-compress-alt"></i>Contact Us</h3>
                    <div>
                        <div>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Full Name</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Email address</label>
                                <input type="number" className="form-control" id="exampleInputPassword1" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Please Type Your Massage</label>
                                <input type="text" className="form-control height" id="exampleInputPassword1" />
                            </div>


                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label class="form-check-label" for="exampleCheck1">Check me out</label>
                            </div>


                            <button className="btn btn-primary">Submit</button>
                        </div>
                    </div>


                </div>
            </div>
            <div className="col-lg-5 col-md-6, col-sm-12">
                <div className="m-2 p-4 border border-3 border-gray rounded-3">
                    <h3 className="border-bottom border-3 border-gray text-primary">Quick Access</h3>
                    <QuickAccess></QuickAccess>
                </div>
            </div>
        </div >
    );
};

export default Contact;