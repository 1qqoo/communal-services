import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRouteElement = (props) => {
    return props.isLoggedIn ? (
        <Outlet />
    ) : (
        <Navigate to="/signin" replace />
    )
}

export default ProtectedRouteElement;