import React, { ReactNode, useState } from "react";
import Chatbar from "./chatbar";
import Navbar from "./navbar";

interface PageProps {
  className?: string;
  children: ReactNode;
  extendedNav?: boolean;
}

function Page({ children, className = "", extendedNav = false }: PageProps) {
  const [extended, setExtended] = useState(extendedNav);
  return (
    <div className="flex flex-col">
      <Navbar extended={extended} setExtended={setExtended} />
      <div
        className={`flex ${!extended && " pt-20"} min-h-screen  ` + className}
      >
        <div className="flex flex-col grow">
          <main className="w-full flex flex-col grow">{children}</main>
        </div>
      </div>
      <Chatbar />
    </div>
  );
}

export default Page;
