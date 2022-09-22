import {
  AccountTreeOutlined,
  AllInboxOutlined,
  HomeOutlined,
  StyleOutlined,
} from "@mui/icons-material";
import { NavLink, useParams } from "react-router-dom";
import ContentPasteGoRoundedIcon from "@mui/icons-material/ContentPasteGoRounded";

function Homenav({ className = "" }: { className?: string }) {
  let { tab } = useParams();
  return (
    <nav
      className={`flex z-10 hover:z-30 fixed bottom-0 text-white rounded-lg gap-16 px-8 border bg-gray-900 max-w-min ${className}`}
    >
      <div
        className={
          `absolute ${
            tab == "home"
              ? "left-[2rem]"
              : tab == "batches"
              ? "left-[7.5rem]"
              : tab == "learningtree"
              ? "left-[13rem]"
              : tab == "tests"
              ? "left-[18.5rem]"
              : "left-[24rem]"
          } -top-1/2 w-12 h-12 border-[6px] border-white bg-primary-700 rounded-full duration-300` +
          " before:bg-transparent before:absolute before:top-[calc(50%-1px)] before:w-4 before:h-3 before:rounded-tr-full before:right-[39px] before:shadow-inner-tr-10 " +
          " after:bg-transparent after:absolute after:top-[calc(50%-1px)] after:w-4 after:h-3 after:rounded-tl-full after:left-[39px] after:shadow-inner-tl-10"
        }
      />
      <div className="flex flex-col my-3 ml-3 justify-center items-center cursor-pointer">
        <NavLink
          to="/dashboard/home"
          className={({ isActive }: { isActive: boolean }): string =>
            `duration-500 transform relative text-xs ${
              isActive && " -translate-y-6"
            } rounded-full`
          }
        >
          <HomeOutlined />
        </NavLink>
        <NavLink
          to="/dashboard/home"
          className={({ isActive }: { isActive: boolean }): string =>
            `opacity-0 ${
              isActive && " opacity-100"
            } absolute text-xs font-bold duration-300 translate-y-3 ${
              isActive && " translate-y-2.5"
            }`
          }
        >
          Home
        </NavLink>
      </div>
      <div className="flex flex-col my-2 justify-center items-center cursor-pointer">
        <NavLink
          to="/dashboard/batches"
          className={({ isActive }: { isActive: boolean }): string =>
            `duration-500 transform relative text-xs ${
              isActive && " -translate-y-6"
            } rounded-full`
          }
        >
          <AllInboxOutlined />
        </NavLink>
        <NavLink
          to="/dashboard/batches"
          className={({ isActive }: { isActive: boolean }): string =>
            `opacity-0 ${
              isActive && " opacity-100"
            } absolute text-xs font-bold duration-300 translate-y-3 ${
              isActive && " translate-y-2.5"
            }`
          }
        >
          Batches
        </NavLink>
      </div>
      <div className="flex flex-col my-2 justify-center items-center cursor-pointer">
        <NavLink
          to="/dashboard/learningtree"
          className={({ isActive }: { isActive: boolean }): string =>
            `duration-500 transform relative text-xs ${
              isActive && " -translate-y-6"
            } rounded-full`
          }
        >
          <AccountTreeOutlined />
        </NavLink>
        <NavLink
          to="/dashboard/learningtree"
          className={({ isActive }: { isActive: boolean }): string =>
            `opacity-0 ${
              isActive && " opacity-100"
            } absolute text-xs font-bold duration-300 translate-y-3 ${
              isActive && " translate-y-2.5"
            }`
          }
        >
          Tree
        </NavLink>
      </div>
      <div className="flex flex-col my-2 justify-center items-center cursor-pointer">
        <NavLink
          to="/dashboard/tests"
          className={({ isActive }: { isActive: boolean }): string =>
            `duration-500 transform relative text-xs ${
              isActive && " -translate-y-6"
            } rounded-full`
          }
        >
          <ContentPasteGoRoundedIcon />
        </NavLink>
        <NavLink
          to="/dashboard/tests"
          className={({ isActive }: { isActive: boolean }): string =>
            `opacity-0 ${
              isActive && " opacity-100"
            } absolute text-xs font-bold duration-300 translate-y-3 ${
              isActive && " translate-y-2.5"
            }`
          }
        >
          Tests
        </NavLink>
      </div>
      <div className="flex flex-col my-2 mr-3 justify-center items-center cursor-pointer">
        <NavLink
          to="/dashboard/books"
          className={({ isActive }: { isActive: boolean }): string =>
            `duration-500 transform relative text-xs ${
              isActive && " -translate-y-6"
            } rounded-full`
          }
        >
          <StyleOutlined />
        </NavLink>
        <NavLink
          to="/dashboard/books"
          className={({ isActive }: { isActive: boolean }): string =>
            `opacity-0 ${
              isActive && " opacity-100"
            } absolute text-xs font-bold duration-300 translate-y-3 ${
              isActive && " translate-y-2.5"
            }`
          }
        >
          Books
        </NavLink>
      </div>
    </nav>
  );
}

export default Homenav;
