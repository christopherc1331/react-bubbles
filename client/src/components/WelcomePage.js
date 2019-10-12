import React from "react";
import { NavLink } from "react-router-dom";

const WelcomePage = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <NavLink to="/login" className="button7">
        Login
      </NavLink>
    </>
  );
};

export default WelcomePage;
