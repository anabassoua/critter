import { createContext, useState, useEffect } from "react";
import ErrorPage from "./ErrorPage";
export const CurrentUserContext = createContext(null);

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    fetch("/api/me/profile")
      .then((res) => res.json())
      .then((resData) => {
        setCurrentUser(resData);
        setStatus("idle");
      })
      .catch((error) => {
        console.log(error);
        setStatus("error");
      });
  }, []);

  if (status === "error") {
    return <ErrorPage />;
  }

  return (
    <CurrentUserContext.Provider value={{ currentUser, status }}>
      {children}
    </CurrentUserContext.Provider>
  );
};
