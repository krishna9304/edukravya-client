import { useParams } from "react-router-dom";
import Batches from "../components/batches";
import Books from "../components/books";
import Home from "../components/home";
import LearningTree from "../components/learningtree";
import PageWithBottomNav from "../components/pagewithbottomnav";

function Dashboard() {
  let { tab } = useParams();
  return (
    <PageWithBottomNav tab={tab || "home"}>
      <div className="flex flex-col gap-6 md:flex-row md:justify-start justify-center bg-blue-700 items-center w-full p-8">
        <img
          className="w-60 rounded-full"
          src="https://w7.pngwing.com/pngs/845/519/png-transparent-computer-icons-avatar-avatar-heroes-logo-fictional-character.png"
        />
        <div className="flex flex-col justify-center items-center md:items-start">
          <div className="text-3xl md:text-5xl font-bold">Yash Gupta</div>
          <div className="text-gray-800 font-mono bg-white px-2 rounded-md bg-opacity-80 ">@mind0bender</div>
          <div>milestones...</div>
        </div>
      </div>
      <div className="w-full flex flex-grow">
        {tab == "home" ? (
          <Home />
        ) : tab == "batches" ? (
          <Batches />
        ) : tab == "learningtree" ? (
          <LearningTree />
        ) : tab == "books" ? (
          <Books />
        ) : (
          "404"
        )}
      </div>
    </PageWithBottomNav>
  );
}

export default Dashboard;
