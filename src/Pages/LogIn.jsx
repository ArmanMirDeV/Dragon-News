import React from "react";
import { Link } from "react-router";

const LogIn = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left py-5">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-600 via-red-500 to-purple-600 bg-clip-text text-transparent">
              Login Your Account
            </h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Email" />
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Login</button>
              </fieldset>
              <p className="text-center mt-2">
                Don't have An Account ?{" "}
                <Link
                  to="/auth/register"
                  className="text-red-600 font-semibold"
                >
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
