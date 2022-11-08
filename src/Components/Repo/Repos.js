import { useEffect, useState } from "react";
import axios from "axios";
import "../../App.css";
import ReactPaginate from "react-paginate";

import { Helmet } from "react-helmet-async";

const PER_PAGE = 3;
function Repos() {
  const [currentPage, setCurrentPage] = useState(0);
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
  // console.log(repos);

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }

  const offset = currentPage * PER_PAGE;
  // console.log("offset", offset)

  const currentPageData = repos.slice(offset, offset + PER_PAGE).map((repo) => (
    <div className="list-item">
      <h3>{repo.name}</h3>
      <a key={repo.id} href={`/repos/${repo.name}`}>
        View Repo
      </a>
    </div>
  ));
  // console.log(currentPageData);

  const pageCount = Math.ceil(repos.length / PER_PAGE);

  return (
    <>
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

        {repos.length ? currentPageData : "Loading..."}

        {/* <ReposCard data={setRepos} /> */}
      </div>
      <ReactPaginate
        previousLabel={"<<"}
        nextLabel={">>"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        renderOnZeroPageCount={null}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </>
  );
}
export default Repos;
