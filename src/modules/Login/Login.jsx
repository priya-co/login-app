import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./login.css";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setError] = useState(false);
  const dispatch = useDispatch();
  const loginCreds = useSelector((state) => state.login);

  const validateLogin = () => {
    if (
      userName.toLowerCase() === loginCreds.username &&
      password === loginCreds.password
    ) {
      dispatch({
        type: "SET_LOGIN",
        value: true,
      });
      return true;
    }
    dispatch({
      type: "SET_LOGIN",
      value: false,
    });
    return false;
  };
  const handleSubmit = () => {
    setError(false);
    if (validateLogin()) {
      console.log("success");
      return;
    }
    console.log("error");
    setError(true);
    // handle error
  };
  const handleChange = (e, type) => {
    const val = e.target.value;
    if (type === "username") {
      setUserName(val);
      return;
    }
    setPassword(val);
  };
  return (
    <div>
      {isError ? <span>Please check credentials</span> : null}
      <input
        type='text'
        placeholder='user name'
        value={userName}
        onChange={(e) => handleChange(e, "username")}
      />
      <input
        type='password'
        placeholder='password'
        value={password}
        onChange={(e) => handleChange(e, "password")}
      />
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
}
