import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const LogIn = () => {
  const [error, setError] = useState("");
  const { signIn } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);
  

  const handleLogIn = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ email, password });
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(`${location.state ? location.state : '/'}`)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // alert(errorCode, errorMessage);
        setError(errorCode);
      });
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left py-5 ">
            <h1 className="text-3xl font-bold ">Login Your Account</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleLogIn}>
              <div className="card-body">
                <fieldset className="fieldset">
                  {/* Email Field */}
                  <label className="label">Email</label>
                  <input
                    required
                    name="email"
                    type="email"
                    className="input"
                    placeholder="Email"
                  />
                  {/* Password Field */}
                  <label className="label">Password</label>
                  <input
                    required
                    name="password"
                    type="password"
                    className="input"
                    placeholder="Password"
                  />
                  <div>
                    <a className="link link-hover">Forgot password?</a>
                  </div>

                  {
                    error && <p className="text-red-600r">{ error}</p>
                  }
                  <button type="submit" className="btn btn-neutral mt-4">
                    Login
                  </button>
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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
