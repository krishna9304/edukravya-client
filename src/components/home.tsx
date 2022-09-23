import {
  AccountTreeOutlined,
  AllInboxOutlined,
  HomeOutlined,
  StyleOutlined,
  ContentPasteGoRounded,
} from "@mui/icons-material";
import Carousel from "./carousel";
import { Link } from "react-router-dom";
import edukravyaImage from "../assets/edukravya-grid-cyan-final.png";
function Home() {
  return (
    <div className="flex flex-col grow pb-20">
      <div className="flex items-center text-2xl font-semibold gap-2 pt-4 px-10">
        Hi, Dummy_student !!
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
        <div className="flex flex-wrap bg-secondary px-10 py-6 justify-between rounded-lg gap-2">
          <Link to="/dashboard/home">
            <div className="flex grow items-center max-w-MIN justify-between bg-slate-300 p-4 rounded-lg gap-2">
              <HomeOutlined fontSize="large" />
              <span>HOME will provide you a overall info of the platform.</span>
            </div>
          </Link>
          <Link to="/dashboard/batches">
            <div className="flex grow items-center max-w-MIN justify-between bg-slate-300 p-4 rounded-lg gap-2">
              <AllInboxOutlined fontSize="large" />
              <span>
                BATCHES will let you know and choose your desired batches.
              </span>
            </div>
          </Link>
          <Link to="/dashboard/learningtree">
            <div className="flex grow items-center max-w-MIN justify-between bg-slate-300 p-4 rounded-lg gap-2">
              <AccountTreeOutlined fontSize="large" />
              <span>TREE will Track your progress in your course.</span>
            </div>
          </Link>
          <Link to="/dashboard/tests">
            <div className="flex grow items-center max-w-MIN justify-between bg-slate-300 p-4 rounded-lg gap-2">
              <ContentPasteGoRounded fontSize="large" />
              <span>
                TEST will let you know on going and upcoming tests and
                participate in them.
              </span>
            </div>
          </Link>
          <Link to="/dashboard/books">
            <div className="flex grow items-center max-w-MIN justify-between bg-slate-300 p-4 rounded-lg gap-2">
              <StyleOutlined fontSize="large" />
              <span>
                BOOK will open a wide range of books to you which you can buy.
              </span>
            </div>
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex items-center text-2xl font-semibold gap-2 px-10 py-4">
          Topics you may want to discover
        </div>
        <div className="flex justify-around gap-3 px-10">
          <div className="bg-green-300 rounded-lg p-5 font-semibold">
            IIT-JEE MAINS AND ADVANCE EXAMS
          </div>
          <div className="bg-pink-300 rounded-lg p-5 font-semibold">
            NEET AND OTHER MEDICAL EXAMS
          </div>
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
