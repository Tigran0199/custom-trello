import React from "react";
import Login from "./prePages/Login";
import Register from "./prePages/Register";

function SignInUp({type}){
    if(type === "login"){
        return (
            <Login />
        )}
    else if (type === "register"){
            return (
                <>
                    <Register />
                </>
            )
        }
    return null
}
export default SignInUp;