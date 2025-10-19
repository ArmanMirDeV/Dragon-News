import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left py-5 ">
            <h1 className="text-3xl font-bold ">Register Your Account</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <fieldset className="fieldset">
                {/* Name Input Field */}
                <label className="label">Your Name</label>
                <input
                  name="name"
                  type="text"
                  className="input"
                  placeholder="Enter Your Name"
                />
                {/* Photo Url */}
                <label className="label">Photo URL</label>
                <input type="text" className="input" placeholder="Photo URL" />

                {/* Email Input Field  */}
                <label className="label">Email</label>
                <input
                  name="email"
                  type="email"
                  className="input"
                  placeholder="Email"
                />

                {/* Password Input Field */}
                <label className="label">Password</label>
                <input
                  name="password"
                  type="password"
                  className="input"
                  placeholder="Password"
                />
                <button className="btn btn-neutral mt-4">Register</button>
              </fieldset>
              <p className="text-center mt-2">
                Already have An Account ?{" "}
                <Link to="/auth/login" className="text-red-600 font-semibold">
                  LogIn
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
