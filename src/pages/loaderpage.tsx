import Loader from "../components/loader";
import Page from "../components/page";

function LoaderPage() {
  return (
    <Page className="w-screen flex justify-center items-center bg-secondary-100">
      <Loader />
    </Page>
  );
}

export default LoaderPage;
