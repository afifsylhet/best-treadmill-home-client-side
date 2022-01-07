import './Register.css'
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { useAuth } from '../../utilities/useAuth';

const Register = () => {
    const { setUser, setIsLoading, signUpWithEmail, getNameValue, getEmailValue, getPasswordValue, getConfirmValue, setError, error, createObject, password, confrimValue } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirectUrl = location.state?.from || '/home';

    const signUpByEmail = (e) => {
        e.preventDefault()

        if (password<100000){
            return alert('Password must be 6 digit, please try again')
        } else if (password !== confrimValue) {
            return alert('Password not mached, please try again')
        } else{
            signUpWithEmail()
            .then((result) => {
                const user = result.user;
                setUser(user)
                setError("")
                history.push(redirectUrl)
                console.log(user)
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            })
            .finally(() => setIsLoading(false));

        const userForBackEnd = createObject();

        if (!error) {
            fetch('https://serene-fortress-61222.herokuapp.com/users', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userForBackEnd)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        console.log(data)
                        alert(" Congratulations!!! Your account created and data saved to database.")
                    }
                })
        }
        e.target.reset();
        }
        
    }

    return (
        <div>
            <br />

            <div className="width ">
                {{ error } && <p className="bg-warning p-3">{error}</p>}
                <div className=" border border-success p-2">
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

                            <input required onBlur={getPasswordValue} type="password" className="form-control" id="exampleInputPassword1" min="600000" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword2" className="form-label"> Confirm Password</label>

                            <input required onBlur={getConfirmValue} type="password" className="form-control" id="exampleInputPassword2" />
                        </div>
                        <input type="submit" value="Create Account" className="btn btn-success" />
                    </Form>

                    <hr />
                    <center className="text-center"> Already have an account?</center>
                    <br/>
                    <NavLink to="/login"  style={{ textDecoration: "none" }}>
                        <h5 className="text-center btn btn-outline-success w-100">Click Here For Login</h5>
                    </NavLink>

                </div>
            </div>
            <br/>
        </div >
    );
};

export default Register;