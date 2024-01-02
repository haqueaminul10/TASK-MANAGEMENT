import React from "react";
//IMPORT COMPONENTS
import Header from "./Header";

function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default Layout;
