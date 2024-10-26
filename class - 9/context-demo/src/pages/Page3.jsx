import React, { useContext } from "react";
import { Global } from "../context/GlobalContext";

const Page3 = () => {
  const { user } = useContext(Global);

  return <h1>Page 3 -{user}</h1>;
};

export default Page3;
