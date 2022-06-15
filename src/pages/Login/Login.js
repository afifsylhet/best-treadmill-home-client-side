import { NavLink, useHistory, useLocation } from 'react-router-dom';
import './Login.css'
import { useAuth } from '../../utilities/useAuth'
import { Form } from 'react-bootstrap';



const Login = () => {
    const { setUser, setIsLoading, passwordSignIn, getEmailValue, getPasswordValue, setError, error } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirectUrl = location.state?.from || '/home';

    const signInbyPassword = (e) => {
        setIsLoading(true)
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
        e.preventDefault()
        e.target.reset();
    }


    return (
        <div style={{ backgroundColor: "#F4FCD9", fontFamily: 'raleway' }}>
            <br />
            <div className="width">
                {{ error } && <p className="p-3" style={{ backgroundColor: '#534340', color: '#F4FCD9' }}>{error}</p>}
                <div className="width borderColor shadow-lg p-2">
                    < p className="fs-4" > Sign in with Email</p>
                    <Form onSubmit={signInbyPassword}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>

                            <input required onChange={getEmailValue} type="email" className="form-control borderColor" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.
                            </div>
                        </div>


                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>

                            <input required onChange={getPasswordValue} type="password" className="form-control borderColor" id="exampleInputPassword1" />
                        </div>

                        <button type="sumbit" className="btn" style={{ backgroundColor: '#534340', color: '#F4FCD9', fontWeight: '500' }}>Sign In</button>
                    </Form>
                    <hr />
                    <center className='text-center'> Are you a new user, don't have an account?</center>
                    <br />

                    <NavLink to="/register" style={{ textDecoration: "none", }} >
                        <h5 className="text-center btn  w-100" style={{ backgroundColor: '#534340', color: '#F4FCD9', fontWeight: '500' }} > Click Here for Register</h5>
                    </NavLink>
                </div>
            </div>
            <br />
            <br />
            <br />
        </div >
    );
};

export default Login;