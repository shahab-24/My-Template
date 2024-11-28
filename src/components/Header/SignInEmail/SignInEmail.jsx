import {createUserWithEmailAndPassword} from 'firebase/auth';
import React, {useContext, useState} from 'react';
import {auth} from '../../../firebase.config';
import {FaEye, FaEyeSlash} from 'react-icons/fa';
import {AuthContext} from '../../../Provider/AuthProvider';

const SignInEmail = () => {
  const {createUser, user} = useContext (AuthContext);
  const [success, setSuccess] = useState ('');
  const [errorMessage, setErrorMessage] = useState ('');
  const [showPassword, setShowPassword] = useState (false);

  const handleSignInWithEmail = e => {
    e.preventDefault ();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log (email, password);

    createUser(email, password)
    .then(result => {
        console.log(result.user)
        setUser()
    })
    .catch(error => {
        console.log(error.message)
    })
    // setSuccess (false);
    // setErrorMessage ('');
    // createUserWithEmailAndPassword (auth, email, password)
    //   .then (result => {
    //     console.log (result);
    //     setSuccess (true);
    //   })
    //   .catch (error => {
    //     console.log (error.message);

    //     setErrorMessage (error.message);
    //   });
  };

  return (
    <div>
      <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
        <h1 className="text-5xl font-bold">Sign in with Email!</h1>
        <form onSubmit={handleSignInWithEmail} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              name="email"
              required
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="password"
              className="input input-bordered"
              name="password"
              required
            />
            <button
              onClick={() => setShowPassword (!showPassword)}
              className="btn btn-xs absolute top-12 right-2"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Sign Up</button>
          </div>

          {errorMessage && <p className="text-red-700">{errorMessage}</p>}
          {success &&
            <p className="text-green-700">User created Successfully</p>}
        </form>
      </div>
    </div>
  );
};

export default SignInEmail;
