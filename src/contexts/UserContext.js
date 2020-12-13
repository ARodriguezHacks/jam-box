import { createContext, useState } from "react";

const UserContext = createContext();

export default UserContext;

const UserProvider = ({ children }) => {
  const [name, setName] = useState("Guest");
  const [age, setAge] = useState("");

  return (
    <UserContext.Provider value={{ name, age }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider };
