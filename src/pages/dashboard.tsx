import { useParams } from "react-router-dom";
import Batches from "../components/batches";
import Books from "../components/books";
import Home from "../components/home";
import LearningTree from "../components/learningtree";
import PageWithBottomNav from "../components/pagewithbottomnav";
import Tests from "../components/tests";
import NavigateTo from "../components/navigateto";
import PageNotFound from "../components/pagenotfound";

function Dashboard() {
  let { tab } = useParams();
  const validTabs: string[] = [
    "home",
    "batches",
    "learningtree",
    "tests",
    "books",
  ];
  return tab && validTabs.includes(tab) ? (
    <PageWithBottomNav extendedNav={true}>
      <div className="w-full flex grow">
        {tab == validTabs[0] ? (
          <Home />
        ) : tab == validTabs[1] ? (
          <Batches />
        ) : tab == validTabs[2] ? (
          <LearningTree />
        ) : tab == validTabs[3] ? (
          <Tests />
        ) : tab == validTabs[4] ? (
          <Books />
        ) : (
          <NavigateTo path="/pagenotfound" />
        )}
      </div>
    </PageWithBottomNav>
  ) : (
    <PageNotFound />
  );
}

export default Dashboard;
