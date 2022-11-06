import { useEffect, useState } from "react";
import axios from "axios";
import ReposCard from "./ReposCard";
import { Helmet } from "react-helmet-async";

function Repos() {
  const [repos, setRepos] = useState([]);
  // const [card, setCard] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: `https://api.github.com/users/Vee-keme/repos`,
    }).then((res) => {
      //   console.log(res);
      setRepos(res.data);
    });
  }, []);
  //   console.log(repos);
  return (
    <div className="Repos">
      {/* try for SEO  */}
      <Helmet>
        <title>Repos</title>
        <meta name="description" content="Github Repos" />
        <meta
          name="keywords"
          content="react-helmet, altschool africa, github repos,"
        />
      </Helmet>

      {repos.length
        ? repos.map((repo) => (
            <div className="list-item">
              <h3>{repo.name}</h3>
              <a key={repo.id} href={`/repos/${repo.name}`}>
                {/* <p key={repo.id}>{repo.name}</p> */}View Repo
              </a>
            </div>
          ))
        : "Loading..."}

      {/* <ReposCard data={setRepos} /> */}
    </div>
  );
}
export default Repos;
