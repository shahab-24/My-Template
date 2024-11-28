import React, {useState} from 'react';
import {auth} from '../../firebase.config';
import {signInWithEmailAndPassword} from 'firebase/auth';

const Login = () => {
  const [user, setUser] = useState ('');
  const [errorMessage, setErrorMessage] = useState ('');

  const handleLoginWithEmail = e => {
    e.preventDefault ();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log (email, password);


    if(password.length < 6){
      setErrorMessage("password must be 6 characters")
      return;
    }


    const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if(!regexPassword.test(password)){
      setErrorMessage("invalid password")
      return;

    }


    signInWithEmailAndPassword (auth, email, password)
      .then (result => {
        console.log (result.user);
        setUser (result.user);
      })
      .then (error => {
        console.log (error.message);
        setErrorMessage (error.message);
      });
  };

  return (
    <div>
      <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
        <h1 className="text-5xl font-bold">Login now!</h1>
        <form onSubmit={handleLoginWithEmail} className="card-body">
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
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              name="password"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        {errorMessage && <p className="text-red">{errorMessage}</p>}
      </div>
      
    </div>
  );
};

export default Login;
