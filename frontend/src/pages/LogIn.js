import { useState } from "react";
import axios from "axios";

function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  const changePassword = (e) => {
    setPassword(e.target.value);
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
        const { data } = await axios.post(
          "/api/users/login",
          { email, password },
          config
        );
        console.log("Successful login!");
        localStorage.setItem("user", JSON.stringify(data));
      } catch (error) {
        console.error(error.message);
      }
    };

    loginUser();
    setEmail("");
    setPassword("");
  };

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
