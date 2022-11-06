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
      {repos.map((repo) => {
        <h1>this displays my {repo.owner.login}repo list</h1>;
      })}

      <ReposCard data={repos} />
    </div>
  );
}
export default App33;
