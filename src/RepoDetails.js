function RepoDetails({ details, loading }) {
  if (loading) {
    return <h1 className="loader">Loading...</h1>;
  }
  return <></>;
}

export default RepoDetails;
