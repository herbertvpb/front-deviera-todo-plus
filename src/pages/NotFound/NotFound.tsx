import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <>
      <h1>NotFound Page</h1>
      <span>This is the NotFound Page</span>
      <hr />
      <Link to="/">Back to home</Link>
    </>
  )
}
