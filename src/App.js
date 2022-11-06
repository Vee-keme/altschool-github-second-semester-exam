import { Route, Routes, Link } from "react-router-dom";
import { Home } from "./Pages/Home";
import RepoData from "./Pages/RepoData";
import NotFound from "./Pages/NotFound";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "./Pages/ErrorFallback";
import ReposCard from "./Components/Repo/ReposCard";
import Repos from "./Components/Repo/Repos";

function App() {
  return (
    <div className="App">
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/repos">List of Repos</Link>
          </li>
        </ul>
      </nav>
      {/* <main>
        <Link to="/RepoData">Go to list of repos</Link>{" "}
      </main> */}

      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/repos/:repodata" element={<RepoData />} />
          <Route path="/reposcard" element={<ReposCard />} />
          <Route path="/repos" element={<Repos />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </ErrorBoundary>
    </div>
  );
}

export default App;
