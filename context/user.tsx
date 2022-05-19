import React, { createContext, useState, FC } from "react";

export type UserContextState = {
  user: string;
  addUser: (name: string) => void;
};

const contextDefaultValues: UserContextState = {
  user: "",
  addUser: () => {},
};

export const UserContext =
  createContext<UserContextState>(contextDefaultValues);

const UserProvider: FC<any> = ({ children }) => {
  const [user, setUser] = useState<string>(contextDefaultValues.user);

  const addUser = (user: string) => setUser(user);

  return (
    <UserContext.Provider
      value={{
        user,
        addUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
