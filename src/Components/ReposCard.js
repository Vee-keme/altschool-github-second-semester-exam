import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import "../App.css";
import { useNavigate } from "react-router-dom";
import RepoData from "../Pages/RepoData";

export default function ReposCard(props) {
  //handle click for repo data
  const navigate = useNavigate();
  const routeChange = () => {
    let path = `RepoData`;
    navigate(path);
  };
  const { data } = props;

  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 3;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    // console.log(
    //   `User requested page number ${event.selected}, which is offset ${newOffset}`
    // );
    setItemOffset(newOffset);
  };

  return (
    <>
      <div>
        {currentItems.map((repo) => {
          console.log(repo.name);
          return (
            // <>
            //   {/* <RepoData key={repo.id} {...currentItems} />; */}
            //   <p key={repo.id}>
            //     {" "}
            //     <a href={repo.owner.html_url}>{repo.name}</a>{" "}
            //   </p>
            //   <a href={repo.svn_url} target="_blank" rel="noreferrer">
            //     click to view this particular repo in gh
            //   </a>
            //   <button
            //     onClick={routeChange}
            //     // onClick={() => {

            //     //   //useNavigate to redirect to the page showing the repoData...
            //     //   //   navigate("RepoData");
            //     //   //   navigate({ RepoData });
            //     //   //pass the "repo" as props for the <RepoData/> and see if this works
            //     // }}
            //   >
            //     View Repo Data on this app
            //   </button>
            // </>
            <>
              <RepoData key={repo.id} repo={repo} />
            </>
          );
        })}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageClassName="page-num"
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeLIinkClassName="active"
      />
    </>
  );
}