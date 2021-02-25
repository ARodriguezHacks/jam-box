import { useState, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import axios from "axios";

function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changeEmail = (e) => {
    setEmail(e.target.value);
    // console.log(email);
  };

  const changePassword = (e) => {
    setPassword(e.target.value);
    // console.log(password);
  };

  const submitForm = (e) => {
    e.preventDefault();
    const loginUser = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      try {
        await axios.post("/api/users/login", { email, password }, config);
        console.log("Successful login!");
      } catch (error) {
        console.error(error.message);
      }
    };

    loginUser();
    console.log(email, password);
    setEmail("");
    setPassword("");
  };

  // useEffect(() => {

  // })

  return (
    <>
      <h2>Log In</h2>
      <form onSubmit={submitForm}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={changeEmail}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={changePassword}
        />
        <button type="submit">Log In</button>
      </form>
    </>
  );
}

export default LogIn;
