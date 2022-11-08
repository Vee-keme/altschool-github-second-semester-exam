import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import { useNavigate } from "react-router-dom";
export function Home() {
  const navigate = useNavigate();
  return (
    <div className="Home">
      <Helmet>
        <title>Home of repolist app</title>
        <meta name="description" content="Github Repos, home page" />
        <meta
          name="keywords"
          content="react-helmet, altschool africa, github repos, list of repos, home page, repo home"
        />
        <link rel="canonical" href="/" />
      </Helmet>
      <h1>
        {" "}
        <span>👋🏾</span>Hi Friend{" "}
      </h1>
      <h2>Welcome to my REPOLIST app</h2>
      <p>click the button below to see the magic</p>
      {/* <Link className="" to="/repos">
        Click me
      </Link> */}
      <button onClick={() => navigate("/repos")}>Click me</button>
    </div>
  );
}
