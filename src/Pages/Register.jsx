import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
  const { createUser, setUser, updateUser } = use(AuthContext);
  const [nameError, setNameError] = useState();

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    if (name.length < 5) {
      setNameError("Name should be more than five characters");
      return;
    } else {
      setNameError("");
    }
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password);
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            navigate("/");
          })

          .catch((error) => {
            //error occurred
            console.log(error);
            setUser(user);
          });
      })

      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage, errorCode);
      });
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left py-5 ">
            <h1 className="text-3xl font-bold ">Register Your Account</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleRegister}>
              <div className="card-body">
                <fieldset className="fieldset">
                  {/* Name Input Field */}
                  <label className="label">Your Name</label>
                  <input
                    name="name"
                    type="text"
                    className="input"
                    placeholder="Enter Your Name"
                    required
                  />
                  {nameError && (
                    <p className="text-xs text-error">{nameError}</p>
                  )}
                  {/* Photo Url */}
                  <label className="label">Photo URL</label>
                  <input
                    name="photo"
                    type="text"
                    className="input"
                    placeholder="Photo URL"
                    required
                  />

                  {/* Email Input Field  */}
                  <label className="label">Email</label>
                  <input
                    name="email"
                    type="email"
                    className="input"
                    placeholder="Email"
                    required
                  />

                  {/* Password Input Field */}
                  <label className="label">Password</label>
                  <input
                    name="password"
                    type="password"
                    className="input"
                    placeholder="Password"
                    required
                  />
                  <button type="submit" className="btn btn-neutral mt-4">
                    Register
                  </button>
                </fieldset>
                <p className="text-center mt-2">
                  Already have An Account ?{" "}
                  <Link to="/auth/login" className="text-red-600 font-semibold">
                    LogIn
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

export default Register;
