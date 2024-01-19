import { Link } from "react-router-dom";
import { useAuth } from "./security/AuthContex";
export default function HeaderComponent() {
  const authContex = useAuth();
  let isAuthenticated = authContex.isAuthenticated;

  const logOut = () => {
    authContex.logout();
  };
  return (
    <header className="border-bottom border-light border-5 mb-5 p-2">
      <div className="container">
        <div className="row">
          <nav className="navbar navbar-expand-lg">
            {isAuthenticated && (
              <Link
                to={"/todos"}
                className="navbar-brand ms-2 fs-2 fw-bold text-black"
              >
                Todo
              </Link>
            )}

            <div className="collapse navbar-collapse">
              <ul className="navbar-nav">
                {isAuthenticated && (
                  <li className="nav-item fs-5">
                    <Link className="nav-link" to="/welcome/manish">
                      Home
                    </Link>
                  </li>
                )}

                {isAuthenticated && (
                  <li className="nav-item fs-5">
                    <Link className="nav-link" to={`/todos`}>
                      Todos
                    </Link>
                  </li>
                )}
              </ul>
            </div>
            <ul className="navbar-nav">
              {!isAuthenticated && (
                <li className="nav-item fs-5">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
              )}

              {isAuthenticated && (
                <li className="nav-item fs-5">
                  <Link className="nav-link" to={"/logout"} onClick={logOut}>
                    Logout
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
