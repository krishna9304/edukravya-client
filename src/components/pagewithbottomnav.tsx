import { ReactNode } from "react";
import Homenav from "./bottomnav";
import Page from "./page";

interface PageWithNavProps {
  children: ReactNode;
  extendedNav?: boolean;
}

function PageWithBottomNav({
  children,
  extendedNav = false,
}: PageWithNavProps) {
  return (
    <Page extendedNav={extendedNav}>
      <div className="flex grow flex-col justify-between items-center">
        {children}
        <Homenav />
      </div>
    </Page>
  );
}

export default PageWithBottomNav;
