import { createContext, useState, useEffect } from "react";

export const CurrentUserContext = createContext(null);

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    fetch("/api/me/profile")
      .then((res) => res.json())
      .then((resData) => {
        console.log(resData);
        setCurrentUser(resData);
        setStatus("idle");
      })
      .catch((error) => {
        console.log(error);
        setStatus("error");
      });
  }, []);

  return (
    <CurrentUserContext.Provider value={{ currentUser, status }}>
      {children}
    </CurrentUserContext.Provider>
  );
};
