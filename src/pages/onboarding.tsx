import { useSelector } from "react-redux";
import Page from "../components/page";
import { RootState } from "../redux/store";

const OnBoarding = () => {
  const { user } = useSelector((state: RootState) => state);
  return (
    <Page>
      <div className="w-full h-full flex">
        <div className="w-1/4 h-full bg-white flex flex-col items-center">
          <div className="pt-10 pb-2">
            <img
              className="w-40 h-40 rounded-full shadow-md"
              src={user.avatar}
              alt="prof"
            />
          </div>
          <div className="font-semibold text-xl">{user.name}</div>
        </div>
        <div className="w-3/4 h-full bg-slate-300"></div>
      </div>
    </Page>
  );
};

export default OnBoarding;
