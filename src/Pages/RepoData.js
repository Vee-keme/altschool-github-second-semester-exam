import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
//return repo details info after the repo is clicked in reposcard
function RepoData({ repo }) {
  const { repoName } = useParams();
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const fetchDetails = async () => {
      const response = await fetch(
        `https://api.github.com/repos/Vee-keme/${repoName}`
      );
      const data = await response.json();
      setDetails(data);
    };
    fetchDetails();
  }, []);
  return (
    <div>
      {/* <a href={`/repo/${repo.name}`}>{repo.name}</a> */}
      <h4>RepoData Component</h4>
    </div>
  );
}
export default RepoData;
