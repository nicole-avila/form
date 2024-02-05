import { Link, useRouteError } from "react-router-dom";
// Using Link to perform client-side routing instead of a-tags to avoid a whole page refresh.

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="error" id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to="/">Back to Home Page</Link>
    </div>
  );
}
