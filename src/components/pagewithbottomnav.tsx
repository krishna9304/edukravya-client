import { ReactNode } from "react";
import Homenav from "./bottomnav";
import Page from "./page";

function PageWithBottomNav({
  children,
  tab = "home",
}: {
  children: ReactNode;
  tab: "home" | "batches" | "learningtree" | "books" | string;
}) {
  return (
    <Page>
      <div className="flex min-h-[calc(100vh-56px)] md:min-h-[calc(100vh-4rem)] flex-col justify-between items-center">
        {children}
        <Homenav />
      </div>
    </Page>
  );
}

export default PageWithBottomNav;
