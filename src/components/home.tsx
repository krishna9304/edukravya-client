import {
  AccountTreeOutlined,
  AllInboxOutlined,
  HomeOutlined,
  StyleOutlined,
  ContentPasteGoRounded,
} from "@mui/icons-material";
import Carousel from "./carousel";
import { Link } from "react-router-dom";
import edukravyaImage from "../assets/edukravya.png";
import { User } from "../redux/slices/user";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

function Home() {
  const user: User = useSelector<RootState, User>(
    (state: RootState): User => state.user
  );
  return (
    <div className="flex flex-col grow pb-20">
      <div className="flex items-center text-2xl font-semibold gap-2 pt-4 px-10">
        Hi, {user.name}!
      </div>
      <div className="w-screen flex flex-col justify-center items-center">
        <Carousel />
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex items-center text-2xl font-semibold gap-2 px-10">
          <span>Explore</span>
          <img
            className={`w-6 -rotate-12 -translate-y-1`}
            src={edukravyaImage}
            alt="Edukravya"
          />
          <span> to learn effectively</span>
        </div>
        <div className="flex w-screen flex-wrap bg-secondary px-10 py-6 rounded-lg gap-2">
          <Link
            to="/dashboard/home"
            className="flex grow items-center max-w-fit bg-slate-300 p-4 rounded-lg gap-2"
          >
            <HomeOutlined fontSize="large" />
            <span className="flex-wrap">
              HOME will provide you a overall info of the platform.
            </span>
          </Link>
          <Link
            to="/dashboard/batches"
            className="flex grow items-center max-w-fit justify-between bg-slate-300 p-4 rounded-lg gap-2"
          >
            <AllInboxOutlined fontSize="large" />
            <span className="flex-wrap">
              BATCHES will let you know and choose your desired batches.
            </span>
          </Link>
          <Link
            to="/dashboard/learningtree"
            className="flex grow items-center max-w-fit bg-slate-300 p-4 rounded-lg gap-2"
          >
            <AccountTreeOutlined fontSize="large" />
            <span className="flex-wrap">
              TREE will Track your progress in your course.
            </span>
          </Link>
          <Link
            to="/dashboard/tests"
            className="flex grow items-center max-w-fit bg-slate-300 p-4 rounded-lg gap-2"
          >
            <ContentPasteGoRounded fontSize="large" />
            <span className="flex-wrap">
              TEST will let you know on going and upcoming tests and participate
              in them.
            </span>
          </Link>
          <Link
            to="/dashboard/books"
            className="flex grow items-center max-w-fit bg-slate-300 p-4 rounded-lg gap-2"
          >
            <StyleOutlined fontSize="large" />
            <span className="flex-wrap">
              BOOK will open a wide range of books to you which you can buy.
            </span>
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex items-center text-2xl font-semibold gap-2 px-10 py-4">
          Topics you may want to discover
        </div>
        <div className="flex w-screen overflow-auto gap-3 px-10">
          <div className="bg-green-300 rounded-lg p-5 font-semibold">
            IIT-JEE MAINS AND ADVANCE EXAMS
          </div>
          <Link
            to="/dashboard/batches#medical"
            className="bg-pink-300 rounded-lg p-5 font-semibold"
          >
            NEET AND OTHER MEDICAL EXAMS
          </Link>
          <div className="bg-orange-300 rounded-lg p-5 font-semibold">
            NDA AND RECRUITMENT EXAMS
          </div>
          <div className="bg-blue-300 rounded-lg p-5 font-semibold">
            UPSC AND OTHER CIVIL SERVICE EXAMS
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
