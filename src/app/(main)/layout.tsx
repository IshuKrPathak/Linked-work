import React from "react";

type props = { children: React.ReactNode };
const Layout = (props: props) => {
  return (
    <div className=" flex overflow-hidden h-screen">
      <div className=" w-full">{props.children}</div>
    </div>
  );
};

export default Layout;
