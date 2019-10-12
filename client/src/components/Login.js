import React, { useState, useEffect } from "react";

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const [userLoginInfo, setUserLoginInfo] = useState({
    username: "",
    password: ""
  });

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChanges = e => {
    setUserLoginInfo({ ...userLoginInfo, [e.target.name]: e.target.value });
  };

  return (
    <div className="formContainer">
      <div className="formBox">
        <form>
          <input
            name="username"
            type="text"
            value={userLoginInfo.username}
            onChange={handleChanges}
            placeholder="Username"
          />
          <input
            name="password"
            type="password"
            value={userLoginInfo.password}
            onChange={handleChanges}
            placeholder="Password"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
