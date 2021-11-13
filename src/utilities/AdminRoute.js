import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useAuth from './useAuth';

const AdminRoute = ({ children, ...rest }) => {
    let { user, isLoading, isAdmin } = useAuth();
    if (isLoading) {
        return <h1 className="text-center mt-5">Loading...</h1>
    }

    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email && isAdmin.role === "Admin" ? (
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

export default AdminRoute;