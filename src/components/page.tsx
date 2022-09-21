import React, { ReactNode } from "react";
import Chatbar from "./chatbar";
import Navbar from "./navbar";

function Page({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <>
      <div className={`min-h-screen` + className}>
        <div>
          <Navbar />
          <main className="w-full min-h-[calc(100vh-52px)] md:min-h-[calc(100vh-4rem)]">
            {children}
          </main>
        </div>
      </div>
      <Chatbar />
    </>
  );
}

export default Page;
