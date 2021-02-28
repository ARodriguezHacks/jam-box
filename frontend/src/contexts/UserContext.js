import { createContext, useEffect, useState } from "react";

// Create new context and call it UserContext
const UserContext = createContext();

// Export the new Context object to use it throughout the app
export default UserContext;

// Higher Order Component (HOC) that will wrap the Provider object from the new UserContext context object.
// A HOC is a function that returns another function
const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("Guest");

  const updateUserName = (data) => {
    setCurrentUser(data.name);
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    if (user) {
      setCurrentUser(user.name);
    }
  }, [currentUser]);

  return (
    <UserContext.Provider
      value={{ currentUser, setCurrentUser, updateUserName }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider };
