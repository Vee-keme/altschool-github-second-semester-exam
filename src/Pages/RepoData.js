import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { format } from "date-fns";

//return repo details info after the repo is clicked in reposcard
function RepoData() {
  let { repoName } = useParams();
  console.log(repoName);
  const [details, setDetails] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios({
      method: "get",
      url: `https://api.github.com/repos/Vee-keme/${repoName}`,
    }).then((res) => {
      setDetails(res.data);
    });
  }, [repoName]);

  return (
    <div>
      {details ? (
        <div>
          {/* <p>REPO OWNER: {details.owner.login}</p> */}
          <p>REPO NAME: {details.name}</p>
          <p>REPO DESCRIPTION : {details.description}</p>
          {/* <p>
            {details.name} was created at{" "}
            {format(new Date(details.created_at), "yyyy/dd/MM")}
          </p> */}
          <p>FULL NAME: {details.full_name}</p>
          <p>REPO VISIBILITY: {details.visibility}</p>
          <p>REPO FORKS: {details.forks && details.parent?.forks}</p>
          <p>
            REPO ISSUES:{" "}
            {details.open_issues_count && details.parent?.open_issues_count}
          </p>
          <p>REPO LANGUAGE: {details.language}</p>
          <p>STARS : {details.stargazers_count}</p>
          <p>
            <a href={details.svn_url}>View Repository on github</a>
          </p>
        </div>
      ) : (
        "Loading..."
      )}
      <button onClick={() => navigate("/repos")}>Back to Repo List</button>
    </div>
  );
}
export default RepoData;
