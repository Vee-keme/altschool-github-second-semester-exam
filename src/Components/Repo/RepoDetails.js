function RepoDetails({ details, loading }) {
  if (loading) {
    return <h1 className="loader">after click details</h1>;
  }
  return <></>;
}

export default RepoDetails;
