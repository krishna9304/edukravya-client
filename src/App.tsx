import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import SignUp from "./pages/signup";
import SignIn from "./pages/signIn";
import PageNotFound from "./components/pagenotfound";
import Landingpage from "./pages/landingpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/landingpage" element={<Landingpage />} />
        <Route path="/dashboard/:tab" element={<Dashboard />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
