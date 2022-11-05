import { Route, Routes } from "react-router-dom";
import App33 from "./App33";
import RepoData from "./Pages/RepoData";

function App() {
  return (
    <Routes>
      <Route path="/" element={<App33 />} />
      <Route path="/RepoData" element={<RepoData />} />
    </Routes>
  );
}

export default App;
