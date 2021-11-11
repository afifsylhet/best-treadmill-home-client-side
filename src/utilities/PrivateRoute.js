import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useAuth from './useAuth';



const PrivateRoute = (props) => {
    const { children, ...rest } = props;
    let { user, isLoading } = useAuth();
    if (isLoading) {
        return <h1 className="text-center mt-5">Loading...</h1>
    }

    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;