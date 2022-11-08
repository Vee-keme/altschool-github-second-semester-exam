import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="Home">
      <h1>
        {" "}
        <span>👋🏾</span>Hi Friend{" "}
      </h1>
      <h2>Welcome to my REPOLIST app</h2>
      <p>click the button below to see the magic</p>
      <Link className="" to="/repos">
        Click me
      </Link>
    </div>
  );
}
