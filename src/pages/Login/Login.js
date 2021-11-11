import { NavLink } from 'react-router-dom';
import './Login.css'
import { useAuth } from '../../utilities/useAuth'
import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';



const Login = () => {

    const { error, user, setUser, setIsLoading, setError, setEmail, setPassword, passwordSignIn } = useAuth();

    const emailRef = useRef("");
    const passRef = useRef("");

    const handleLogin = (e) => {
        const email = emailRef?.current.value;
        const password = passRef?.current.value;

        setEmail(email);
        setPassword(password)

        passwordSignIn()
            .then((result) => {
                const user = result.user;
                setUser(user)
                setEmail("")
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
                console.log(error)
            })
            .finally(() => setIsLoading(false));
        // alert('Login success. Wellcome back.')
        console.log(user)
        // console.log(error)

        e.target.reset();
        e.preventDefault()
    }


    return (
        <div>
            <br />

            <div className="width border border-success p-2">
                <div>
                    < p className="fs-4" > Sign in with Email</p>
                    <Form onSubmit={handleLogin}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>

                            <input required ref={emailRef} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.
                            </div>
                        </div>


                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>

                            <input required ref={passRef} type="password" className="form-control" id="exampleInputPassword1" />
                        </div>

                        <button type="sumbit" className="btn btn-success">Sign In</button>
                    </Form>
                    <hr />
                    <NavLink to="/register">
                        <h5 className="text-success text-center" style={{ textDecoration: 'none' }}> Are you new user? Please register</h5>
                    </NavLink>
                </div>
            </div>
        </div >
    );
};

export default Login;