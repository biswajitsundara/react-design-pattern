import React, { useState, useEffect } from "react";
import axios from "axios";

export const UserLoader = ({ userid, children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get(`http://127.0.0.1:8080/users/${userid}`);
      const currentUser = response.data;
      setUser(currentUser);
    })();
  }, [userid]);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { user });
        }
        return child;
      })}
    </>
  );
};
