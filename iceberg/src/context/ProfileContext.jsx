import { useState, useEffect, createContext } from "react";

import { API_URL } from "../App";

const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getUsers = async () => {
    const response = await fetch(`${API_URL}/users`);
    const data = await response.json();
    setUsers(data);
    setIsLoading(false);
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <ProfileContext.Provider value={{ users, isLoading }}>
      {children}
    </ProfileContext.Provider>
  );
};
export default ProfileContext;
