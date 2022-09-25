import { useParams } from "react-router-dom";
import Page from "../components/page";

function Profile() {
  const { id } = useParams();
  return <Page>{id}</Page>;
}

export default Profile;
