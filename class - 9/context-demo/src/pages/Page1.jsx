import React, { useContext } from "react";
import Page2 from "./Page2";
import { Global } from "../context/GlobalContext";

const Page1 = () => {
  const { user } = useContext(Global);
  return (
    <>
      <h1>Page 1 - {user}</h1>
      <Page2 />
    </>
  );
};

export default Page1;
