export function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div
      style={{
        display: "flex",
        padding: "3rem",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        margin: "10% auto",
      }}
      role="alert"
    >
      <title>Something went wrong</title>

      <h1>Something went wrong:</h1>
      <pre style={{ color: "red" }}>{error.message}</pre>
      <button
        style={{ width: "fit-content" }}
        className="button"
        onClick={resetErrorBoundary}
      >
        Try again
      </button>
    </div>
  );
}
