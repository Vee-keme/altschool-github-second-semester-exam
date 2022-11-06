import { Route, Routes, Link } from "react-router-dom";
import { Home } from "./Pages/Home";
import App33 from "./Components/Repo/App33";
import RepoData from "./Pages/RepoData";
import NotFound from "./Pages/NotFound";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "./Pages/ErrorFallback";

function App() {
  return (
    <div className="App">
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/RepoData">List of Repos</Link>
          </li>
        </ul>
      </nav>

      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/RepoData" element={<RepoData />} /> */}
          <Route path="repo/:repoName" element={<RepoData />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ErrorBoundary>
    </div>
  );
}

export default App;
