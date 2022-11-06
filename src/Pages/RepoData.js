import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
//return repo details info after the repo is clicked in reposcard

function RepoData() {
  let { repoName } = useParams();
  const [details, setDetails] = useState([]);

  // useEffect(() => {
  //   const fetchDetails = async () => {
  //     const response = await fetch(
  //       `https://api.github.com/repos/Vee-keme/&{repoName}` //      );
  //     const data = await response.json();
  //     setDetails(data);
  //     //onsole.log(data);
  //   };
  //   fetchDetails();
  // }, [repoName]);

  useEffect(() => {
    axios({
      method: "get",
      // url: `https://api.github.com/repos/Vee-keme/${repoName}`,
      url: `https://api.github.com/users/Vee-keme/repos/${repoName}`,
    }).then((res) => {
      // console.log(res, repoName);
      setDetails(res.data);
    });
  }, []);

  return (
    <div>
      {details ? (
        <div>
          <p>{details.name}</p>
          <p>{details.created_at}</p>
          <p>{details.full_name}</p>
        </div>
      ) : (
        "Loading..."
      )}
    </div>
  );
}
export default RepoData;
