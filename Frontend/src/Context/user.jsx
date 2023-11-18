/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const usercontext = createContext();

export function UserContext({ children }) {
  const [user, setUser] = useState(null);
  return (
    <usercontext.Provider value={{ user, setUser }}>
      {children}
    </usercontext.Provider>
  );
}
UserContext.propTypes = {
  children: PropTypes.node.isRequired,
};
