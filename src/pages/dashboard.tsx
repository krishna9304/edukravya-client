import { useParams } from "react-router-dom";
import Batches from "../components/batches";
import Books from "../components/books";
import Home from "../components/home";
import LearningTree from "../components/learningtree";
import PageWithBottomNav from "../components/pagewithbottomnav";
import Tests from "../components/tests";
import NavigateTo from "../components/navigateto";

function Dashboard() {
  let { tab } = useParams();
  return (
    <PageWithBottomNav extendedNav={false}>
      <div className="w-full flex grow">
        {tab == "home" ? (
          <Home />
        ) : tab == "batches" ? (
          <Batches />
        ) : tab == "learningtree" ? (
          <LearningTree />
        ) : tab == "tests" ? (
          <Tests />
        ) : tab == "books" ? (
          <Books />
        ) : (
          <NavigateTo path="/pagenotfound" />
        )}
      </div>
    </PageWithBottomNav>
  );
}

export default Dashboard;
