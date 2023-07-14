import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLogout } from "../state/index.js";

function Homepage() {
  const dispatch = useDispatch();
  const { email} = useSelector((state) => state.user);
  return (
    <>
      <div>
        <h1>Welcome {email}, Great to have you on board!</h1>
        <div>
          <button onClick={() => dispatch(setLogout())}>Logout</button>
        </div>
      </div>
    </>
  );
}

export default Homepage;
