import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
//return repo details info after the repo is clicked in reposcard
function RepoData() {
  const { repoName } = useParams();
  const [details, setDetails] = useState([]);

  // useEffect(() => {
  //   const fetchDetails = async () => {
  //     const response = await fetch(
  //       `https://api.github.com/repos/Vee-keme/${repoName}`
  //     );
  //     const data = await response.json();
  //     setDetails(data);
  //     console.log(data);
  //   };
  //   fetchDetails();
  // }, [repoName]);

  useEffect(() => {
    axios({
      method: "get",
      url: `https://api.github.com/repos/Vee-keme/${repoName}`,
    }).then((res) => {
      console.log(res, repoName);
      setDetails(res.data);
    });
  }, []);

  // console.log(data);
  return (
    <div>
      {details.length ? (
        <div>
          <p>{details.name}</p>
        </div>
      ) : (
        "Loading..."
      )}
      {/* <h2>heading</h2> */}
    </div>
  );
}
export default RepoData;
