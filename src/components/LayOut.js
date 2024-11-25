"use client";

import { SessionProvider } from "next-auth/react";

const LayOut = ({ children }) => {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  );
};

export default LayOut;
