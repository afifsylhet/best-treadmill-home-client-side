import { NavLink } from 'react-router-dom';
import './Login.css'
import { useAuth } from '../../utilities/useAuth'
import { Form } from 'react-bootstrap';



const Login = () => {
    const { user, setUser, setIsLoading, passwordSignIn, getEmailValue, getPasswordValue, setError, error } = useAuth();


    const signInbyPassword = (e) => {
        passwordSignIn()
            .then((result) => {
                const user = result.user;
                setUser(user)
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

            <div className="width border border-success p-2">
                <div>
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
                    <NavLink to="/register">
                        <h5 className="text-success text-center" style={{ textDecoration: 'none' }}> Are you new user? Please register</h5>
                    </NavLink>
                </div>
            </div>
        </div >
    );
};

export default Login;