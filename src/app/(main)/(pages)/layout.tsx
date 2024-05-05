import React from "react";

type props = { children: React.ReactNode };

const Layout = ({ children }: props) => {
  return (
    <div className=" border-l-[1px] border-t-[1px] pb-20 h-screen rounded-l-xl border-muted-foreground/20 overflow-scroll">
      {children}
    </div>
  );
};

export default Layout;
