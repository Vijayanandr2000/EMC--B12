import { createContext } from "react";

export const Global = createContext();

export const GlobalProvider = ({ children }) => {
  const user = "Anand";

  return <Global.Provider value={{ user }}>{children}</Global.Provider>;
};
