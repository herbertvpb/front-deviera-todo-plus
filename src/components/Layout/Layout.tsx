import { Link, Outlet } from "react-router-dom";
import { Header } from "../Header";

export function Layout() {
  return (
    <div>
      <Header />
      <nav>
        <ul>
          <li>
            <Link to="/sign-in">Sign In</Link>
          </li>
          <li>
            <Link to="/sign-up">Sign Up</Link>
          </li>
        </ul>
      </nav>

      <hr />

      <Outlet />
    </div>
  )
}
