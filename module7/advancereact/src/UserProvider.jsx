import { createContext } from "react";
import { useState } from "react";

export const UserContext = createContext(); //first step in creating the context
/*Define the user provider that provides the context */

export function UserProvider(props) {
  const [currentUser, setCurrentUser] = useState({});

  const handleUpdateUser = (user) => {
    setCurrentUser(user);
  };
  return (
    <UserContext.Provider value={{ currentUser, handleUpdateUser }}>
      {props.children}
    </UserContext.Provider>
  );
}

