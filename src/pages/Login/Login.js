import { NavLink, useHistory, useLocation } from 'react-router-dom';
import './Login.css'
import { useAuth } from '../../utilities/useAuth'
import { Form } from 'react-bootstrap';



const Login = () => {
    const { user, setUser, setIsLoading, passwordSignIn, getEmailValue, getPasswordValue, setError, error } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirectUrl = location.state?.from || '/home';

    const signInbyPassword = (e) => {
        passwordSignIn()
            .then((result) => {
                const user = result.user;
                setUser(user)
                history.push(redirectUrl)
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            })
            .finally(() => setIsLoading(false));
        console.log(user)
        e.preventDefault()
        e.target.reset();
    }


    return (
        <div>
            <br />
                        <div className="width">
                        {{ error } && <p className="bg-warning p-3">{error}</p>}
                <div className="width border border-success p-2">
                    < p className="fs-4" > Sign in with Email</p>
                    <Form onSubmit={signInbyPassword}>
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

                        <button type="sumbit" className="btn btn-success">Sign In</button>
                    </Form>
                    <hr />
                     <center className='text-center'> Are you a new user, don't have an account?</center>
                     <br/>

                    <NavLink to="/register"  style={{ textDecoration: "none" }} >
                        <h5 className="text-center btn btn-outline-success w-100" > Click Here for Register</h5>
                    </NavLink>
                </div>
            </div>
            <br/>
        </div >
    );
};

export default Login;