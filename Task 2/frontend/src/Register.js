import React, { useEffect } from "react";
import { useState } from "react";
import "./Register.css";
import { useDispatch, useSelector } from "react-redux";
import { register } from "./redux/action";
function Register() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [registered, setRegistered] = useState(false);

  const { loading, isAuthenticated, user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isAuthenticated) {
      setRegistered(true);
    }
  }, [dispatch]);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(name + " " + email);
    dispatch(register(name, email));
  };

  return (
    <div className="container">
      {isAuthenticated && (
        <div>
          <h1>Name- {user.name}</h1>
          <h1>Email- {user.email}</h1>
        </div>
      )}
      <form onSubmit={submitHandler} className="form">
        <div>
          <label> Name:</label>
          <input value={name} onChange={(e) => setName(e.target.value)}></input>
        </div>
        <div>
          <label> Email:</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Register;
