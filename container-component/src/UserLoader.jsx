import axios from 'axios';
import React, { useEffect, useState } from "react";

export const UserLoader = ({ children, id }) => {

  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get(`/api/users/${id}`);
      setUser(response.data);
    })();
  }, []);

  return user && React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { user });
    }
    return child;
  });
}