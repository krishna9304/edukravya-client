import { useSelector } from "react-redux";
import LoaderPage from "../pages/loaderpage";
import { User } from "../redux/slices/user";
import { RootState } from "../redux/store";
import NavigateTo from "./navigateto";

function AuthProtectedPage({
  children,
  isLoading,
}: {
  children: any;
  isLoading: boolean;
}) {
  const user: User = useSelector<RootState, User>(
    (state: RootState): User => state.user
  );
  return isLoading ? (
    <LoaderPage />
  ) : user.userI ? (
    children
  ) : (
    <NavigateTo path="/signup" />
  );
}

export default AuthProtectedPage;
