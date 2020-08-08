import React from "react";
import { useSelector, useDispatch } from "react-redux";

import "./App.css";
import Login from "./modules/Login/Login";
import Dashboard from "./modules/Dashboard/Dashboard";

function App() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log(isLoggedIn);
  return (
    <div className='App'>
      {isLoggedIn && isLoggedIn != "false" ? <Dashboard /> : <Login />}
    </div>
  );
}

export default App;
