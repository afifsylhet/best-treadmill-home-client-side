import './Register.css'
import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { useAuth } from '../../utilities/useAuth';

const Register = () => {
    const { setUser, setIsLoading, signUpWithEmail, getNameValue, getEmailValue, getPasswordValue, getConfirmValue, setError, error, createObject } = useAuth();

    const signUpByEmail = (e) => {
        signUpWithEmail()
            .then((result) => {
                const user = result.user;
                setUser(user)
                console.log(user)
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            })
            .finally(() => setIsLoading(false));
        const userForBackEnd = createObject();
        console.log(userForBackEnd)
        e.preventDefault()
        e.target.reset();
    }

    return (
        <div>
            <br />

            <div className="width border border-success p-2">
                <div>
                    < p className="fs-4" > Create Account with Email</p>
                    <Form onSubmit={signUpByEmail}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail2" className="form-label">Full Name</label>

                            <input required onBlur={getNameValue} type="text" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp3" />
                            <div id="emailHelp3" className="form-text">We'll never share your email with anyone else.
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>

                            <input required onBlur={getEmailValue} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.
                            </div>
                        </div>


                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>

                            <input required onBlur={getPasswordValue} type="password" className="form-control" id="exampleInputPassword1" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword2" className="form-label"> Confirm Password</label>

                            <input required onBlur={getConfirmValue} type="password" className="form-control" id="exampleInputPassword2" />
                        </div>
                        <input type="submit" value="Create Account" className="btn btn-success" />
                    </Form>

                    <hr />
                    <NavLink to="/login">
                        <h5 className="text-success text-center" style={{ textDecoration: "none" }}>Already have an Account? Please Login</h5>
                    </NavLink>

                </div>
            </div>
        </div >
    );
};

export default Register;