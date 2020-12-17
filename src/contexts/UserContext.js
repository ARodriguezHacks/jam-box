import { createContext, useState } from "react";

const UserContext = createContext();

export default UserContext;

const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("Guest");

  const updateUserName = (name) => {
    setCurrentUser(name);
  };

  return (
    <UserContext.Provider
      value={{ currentUser, setCurrentUser, updateUserName }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider };
