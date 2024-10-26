import React, { useContext } from "react";
import Page3 from "./Page3";
import { Global } from "../context/GlobalContext";

const Page2 = () => {
  const { user } = useContext(Global);

  return (
    <>
      <h1>Page 2 - {user}</h1>
      <Page3 />
    </>
  );
};

export default Page2;
