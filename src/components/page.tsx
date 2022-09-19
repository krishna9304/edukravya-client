import React, { ReactNode } from "react";
import Navbar from "./navbar";

function Page({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`min-h-screen ` + className}>
      <Navbar />
      <main className="w-full min-h-[calc(100vh-52px)] md:min-h-[calc(100vh-4rem)]">
        {children}
      </main>
    </div>
  );
}

export default Page;
