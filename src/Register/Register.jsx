import React from "react";
import { auth } from "../firebase.config";
import { signInWithPopup, GithubAuthProvider } from "firebase/auth";

const Register = () => {
  const Provider = new GithubAuthProvider();

  const handleGithubSignin = (e) => {
    e.preventDefault()
    signInWithPopup(auth, Provider)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
        <h1 className="text-5xl font-bold">Sign Up!</h1>
        <form onSubmit={handleGithubSignin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Sign Up with Github</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
