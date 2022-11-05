import { useEffect, useState } from "react";
import axios from "axios";
import ReposCard from "./Components/ReposCard";

function App33() {
  const [repos, setRepos] = useState([]);
  // const [card, setCard] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: `https://api.github.com/users/Vee-keme/repos`,
    }).then((res) => {
      setRepos(res.data);
    });
  }, []);
  //   console.log(repos);
  return (
    <div>
      <ReposCard data={repos} />
      {/* {repos.map((repo) => {
        console.log(repo.name);
        return (
          <p key={repo.id}>
            {" "}
            <a href={repo.owner.html_url}>{repo.name}</a>{" "}
          </p>
        );
      })} */}
    </div>
  );
}
export default App33;
