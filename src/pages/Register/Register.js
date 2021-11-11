import './Register.css'
import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { useAuth } from '../../utilities/useAuth';

const Register = () => {

    const { user, setUser, error, setError, setIsLoading, setEmail, setPassword, setUserName, signUpWithEmail } = useAuth();

    const nameRef = useRef("");
    const emailRef = useRef("");
    const pass_1Ref = useRef("");
    const pass_2Ref = useRef("");

    const handleSignUp = (e) => {
        const name = nameRef?.current.value;
        const email = emailRef?.current.value;
        const pass_1 = pass_1Ref?.current.value;
        const pass_2 = pass_2Ref?.current.value;
        if (pass_1 !== pass_2) {
            e.preventDefault()
            return alert('Password not Mached, Try again')
        }
        else {
            setUserName(name);
            setEmail(email);
            setPassword(pass_2);


            signUpWithEmail();

            const userB = {};
            userB.name = name;
            userB.email = email;
            userB.pass = pass_2;

            fetch('http://localhost:5000/users', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userB)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        console.log(data)
                    }
                })



            alert(' Sign up success. Wellcome to Best Treadmill Home.')

            e.target.reset();
            e.preventDefault()

        }
    }


    return (
        <div>
            <br />

            <div className="width border border-success p-2">
                <div>
                    < p className="fs-4" > Create Account with Email</p>
                    <Form onSubmit={handleSignUp}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail2" className="form-label">Full Name</label>

                            <input required ref={nameRef} type="text" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp3" />
                            <div id="emailHelp3" className="form-text">We'll never share your email with anyone else.
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>

                            <input required ref={emailRef} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.
                            </div>
                        </div>


                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>

                            <input required ref={pass_1Ref} type="password" className="form-control" id="exampleInputPassword1" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword2" className="form-label"> Confirm Password</label>

                            <input required ref={pass_2Ref} type="password" className="form-control" id="exampleInputPassword2" />
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