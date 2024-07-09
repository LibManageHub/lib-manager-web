import { UserProvider } from "@/hooks/useAuth";
import React from "react";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return <UserProvider><div className="wrapper">{children}</div></UserProvider>
};

export default Wrapper;
