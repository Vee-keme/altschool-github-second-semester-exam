import { Profiler, useEffect, useState } from "react";
// import SearchBar from "./Components/SearchBar";
import Loading from "./Components/Loading";
import Profile from "./Components/Profile";

function App2() {
  const [items, setItems] = useState([]);
  const [users] = useState("florinpop17");

  useEffect(() => {
    const fetchRepos = async () => {
      const res = await fetch(
        `https://api.github.com/users/${users}/repos?page=1&per_page=6&sort=updated`
      );
      const data = await res.json();
      setItems(data);
    };

    fetchRepos();
  }, []);
  return (
    <>
      {!items ? (
        <Loading />
      ) : (
        <>
          <section style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
            <h1>Viewing {users}'s repositories</h1>
            <div>
              {items.map((item) => (
                <Profile key={item.id} {...item} />
              ))}
            </div>
          </section>
        </>
      )}
    </>
  );

  //frm second example
  // return (
  //   <div>
  //     <h1>Repo Search</h1>
  //     <SearchBar />
  //   </div>
  // );
}
export default App2;
