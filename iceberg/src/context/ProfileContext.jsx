import { useState, useEffect, createContext } from "react";

const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getUsers = async () => {
    const response = await fetch("http://localhost:8000/users");
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