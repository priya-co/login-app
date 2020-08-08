import React from "react";
import { useSelector, useDispatch } from "react-redux";

import "./dashboard.css";

export default function Dashboard() {
  const users = useSelector((state) => state.users);
  return (
    <div>
      {users.user.map((person) => (
        <div className='person-container' key={person.id}>
          <div className='name'>{person.name}</div>
          <div className='age'>{person.age}</div>
          <div className='gender'>{person.gender}</div>
          <div className='email'>{person.email}</div>
          <div className='phone-no'>{person.phoneNo}</div>
        </div>
      ))}
    </div>
  );
}
