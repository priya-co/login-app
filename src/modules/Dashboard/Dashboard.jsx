import React from "react";
import { useSelector, useDispatch } from "react-redux";

import "./dashboard.css";

export default function Dashboard() {
  const users = useSelector((state) => state.users);
  return (
    <div>
      <div className='main-label'>User's Dashboard</div>
      <div className='users-container'>
        {users.user.map((person) => (
          <div className='person-container' key={person.id}>
            <div className='name'>
              <b>Name: </b>
              {person.name}
            </div>
            <div className='age'>
              <b>Age: </b>
              {person.age}
            </div>
            <div className='gender'>
              <b>Gender: </b>
              {person.gender}
            </div>
            <div className='email'>
              <b>Email: </b>
              {person.email}
            </div>
            <div className='phone-no'>
              <b>Phone No: </b>
              {person.phoneNo}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
