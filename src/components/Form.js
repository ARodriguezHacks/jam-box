import { useState, useContext } from "react";
import UserContext from "../contexts/UserContext";

function Form() {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const [user, setUser] = useState("");

  const onChange = (e) => {
    e.preventDefault();
    setUser(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setCurrentUser(user);
    setUser("");
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={user}
        placeholder="Type in name..."
        onChange={onChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
