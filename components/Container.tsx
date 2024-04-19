import React, { ReactNode } from "react";

type children = {
  children: React.ReactNode;
};
function Container({ children }: children) {
  return (
    <div className="flex justify-between h-[92svh] items-center">
      {children}
    </div>
  );
}

export default Container;
